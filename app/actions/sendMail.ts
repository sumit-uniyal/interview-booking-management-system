'use server';

import smtpMailer from '@/lib/smtpMailer';
import { NextResponse } from 'next/server';

interface MailProps {
  to: string;
  subject: string;
  body: string;
}

const sendMail = async ({ subject, body, to }: MailProps) => {
  try {
    if (!subject || !body || !to) {
      return NextResponse.json(
        { msg: 'Required fields are missing' },
        { status: 400 }
      );
    }
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: body,
    };

    await smtpMailer.sendMail(mailOptions);
    return NextResponse.json({ msg: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: 'Failed to send mail' }, { status: 500 });
  }
};

export default sendMail;
