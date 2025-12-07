import { cookies } from 'next/headers';
import CheckoutPageClient from '@/app/components/payment/CheckoutPageClient'; // the client part
import { redirect } from 'next/navigation';

export default async function CheckoutPage() {
  const cookieStore = await cookies();
  const bookingData = await cookieStore.get('bookingData')?.value;

  if (!bookingData) {
    redirect('/');
  }

  const parsedData = JSON.parse(bookingData);

  return <CheckoutPageClient bookingData={parsedData} />;
}
