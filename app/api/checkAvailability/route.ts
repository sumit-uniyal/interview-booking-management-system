'use server';

import { NextRequest, NextResponse } from 'next/server';
import connectdb from '@/lib/db';
import Reservation from '@/models/Reservation';

function parseTime(timeStr: string) {
  const [time, modifier] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;

  return { hours, minutes };
}

function parseDuration(durationStr: string) {
  if (!durationStr) return 0;
  if (durationStr.includes('hr')) {
    return parseFloat(durationStr) * 60;
  } else if (durationStr.includes('min')) {
    return parseFloat(durationStr);
  }
  return 0;
}

export async function POST(req: NextRequest) {
  try {
    await connectdb();

    const data = await req.json();
    const { category, startdate, time, duration } = data;

    const reservations = await Reservation.find({ type: category });

    let available = true;

    if (reservations.length > 0) {
      if (category === 'bhagwat') {
        const reqStart = new Date(startdate).getTime();
        const reqEnd = new Date(data.enddate).getTime();

        const overlap = reservations.some((r) => {
          const rStart = new Date(r.startdate).getTime();
          const rEnd = new Date(r.enddate).getTime();
          return reqStart <= rEnd && reqEnd >= rStart;
        });

        available = !overlap;
      } else if (category === 'interview') {
        const { hours: reqHours, minutes: reqMinutes } = parseTime(time);
        const reqStart = new Date(startdate);
        reqStart.setHours(reqHours, reqMinutes, 0, 0);
        const reqEnd = new Date(
          reqStart.getTime() + parseDuration(duration) * 60000
        );

        const overlap = reservations.some((r) => {
          const { hours: rHours, minutes: rMinutes } = parseTime(
            r.interviewtime
          );
          const rStart = new Date(r.startdate);
          rStart.setHours(rHours, rMinutes, 0, 0);
          const rEnd = new Date(
            rStart.getTime() + parseDuration(r.duration) * 60000
          );

          return reqStart < rEnd && reqEnd > rStart;
        });

        available = !overlap;
      } else {
        available = false;
      }
    }

    return NextResponse.json({
      success: true,
      available,
      data: reservations,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
