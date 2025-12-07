import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: 'bookingData',
    value: JSON.stringify(data),
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 60 * 10,
  });

  return response;
}
