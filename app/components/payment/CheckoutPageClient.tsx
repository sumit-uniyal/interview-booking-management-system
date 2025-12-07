'use client';

import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

interface CheckoutPageClientProps {
  bookingData: any;
}

export default function CheckoutPageClient({
  bookingData,
}: CheckoutPageClientProps) {
  const [clientSecret, setClientSecret] = useState('');

  const amount = bookingData?.type === 'interview' ? 5000 : 50000;

  useEffect(() => {
    async function createIntent() {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          bookingId: bookingData.reservationid,
        }),
      });

      const data = await res.json();
      setClientSecret(data.clientSecret);
    }

    createIntent();
  }, [bookingData]);

  return (
    <div className="checkout-container mt-20 p-5">
      <div className="product-box">
        <h2>Pure set</h2>
        <p className="price">₹ {amount}.00</p>
        <img
          src="/banner/reservatiobanner.jpg"
          className="product-image"
          alt=""
        />
      </div>

      <div className="payment-box">
        <h2>Pay with card</h2>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm bookingData={bookingData} />
          </Elements>
        ) : (
          <p>Loading payment…</p>
        )}
      </div>

      <style jsx>{`
        .checkout-container {
          display: flex;
          gap: 40px;
          padding: 40px;
        }
        .product-box {
          width: 50%;
        }
        .price {
          font-size: 24px;
        }
        .product-image {
          width: 350px;
          margin-top: 20px;
          border-radius: 10px;
        }
        .payment-box {
          width: 50%;
          padding: 30px;
          border-radius: 15px;
          border: 1px solid #e5e5e5;
        }
      `}</style>
    </div>
  );
}
