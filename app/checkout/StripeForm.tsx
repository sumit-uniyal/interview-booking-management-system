'use client';

import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const StripeForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    setLoading(false);

    if (result.error) {
      alert(result.error.message);
    } else {
      if (result.paymentIntent?.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '400px', margin: '20px auto' }}
    >
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          width: '100%',
          marginTop: '15px',
          padding: '12px',
          background: 'black',
          color: 'white',
          borderRadius: '6px',
        }}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default StripeForm;
