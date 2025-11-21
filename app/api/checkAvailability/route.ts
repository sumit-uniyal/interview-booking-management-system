// app/api/checkavailability/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectdb from '@/lib/db';
import Reservation from '@/models/Reservation';

export async function POST(req: NextRequest) {
  try {
    await connectdb();

    const data = await req.json();
    const { category, duration, startdate, enddate, time } = data;

    let query: any = {};

    if (category === 'interview') {
      query = {
        startdate: new Date(startdate),
        time,
        duration,
        category,
      };
    } else {
      query = {
        category,
        startdate: { $lte: new Date(enddate!) },
        enddate: { $gte: new Date(startdate!) },
      };
    }

    const reservations = await Reservation.find(query);

    if (reservations.length > 0) {
      return NextResponse.json({
        success: true,
        available: false,
        data: reservations,
      });
    }

    return NextResponse.json({ success: true, available: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
