'use server';

import connectdb from '@/lib/db';
import Reservation from '@/models/Reservation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await connectdb();
    const data = await req.json();

    const {
      firstname,
      lastname,
      email,
      phone,
      address,
      description,
      type,
      onlineinterview,
      startdate,
      enddate,
      interviewtime,
      duration,
    } = data;

    let lastReservation = await Reservation.findOne().sort({ _id: -1 });

    let newReservationId: string;

    if (!lastReservation || !lastReservation.reservationid) {
      newReservationId = 'RID-4001-000';
    } else {
      const lastId = lastReservation.reservationid;
      const parts = lastId.split('-');
      const lastNumber = parseInt(parts[2], 10);
      const nextNumber = (lastNumber + 1).toString().padStart(3, '0');
      newReservationId = `${parts[0]}-${parts[1]}-${nextNumber}`;
    }

    const save = await Reservation.create({
      firstname,
      lastname,
      email,
      phone,
      address,
      description,
      type,
      onlineinterview,
      startdate: startdate.toString(),
      enddate: enddate?.toString(),
      interviewtime,
      duration,
      reservationid: newReservationId,
    });

    console.log('Reservation saved:', save);

    return NextResponse.json({ success: true, data: save }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
