'use server';

import sendMail from '@/app/actions/sendMail';
import connectdb from '@/lib/db';
import Reservation from '@/models/Reservation';
import { cookies } from 'next/headers';
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

    const to = save.email;
    const subject = 'Booking Confirmation – Sanatan Connect';
    const body = `<div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333;">
                    <p>Hi <strong>${save.firstname} ${save.lastname}</strong>,</p>
                    <p>We’re happy to inform you that your booking has been successfully saved.</p>
                    <p>
                      <strong>Booking Reference ID:</strong> 
                      <span style="color: #4CAF50; font-weight: bold;">${save.reservationid}</span>
                    </p>
                    <p>If you need any assistance regarding your booking, feel free to reach out to us anytime.</p>

                    <br/>
                    <p style="margin-top: 12px;">Warm regards,</p>
                    <p><strong>The Sanatan Connect Team</strong></p>
                  </div>
                `;

    await sendMail({
      subject,
      body,
      to,
    });

    const response = NextResponse.json(
      { success: true, data: save },
      { status: 200 }
    );

    response.cookies.set({
      name: 'bookingData',
      value: JSON.stringify(save),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 10,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
