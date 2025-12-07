'use client';

import React, { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface PaymentFormProps {
  bookingData: any;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ bookingData }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState(bookingData.email);
  const [phone, setPhone] = useState(bookingData.phone);
  const [name, setName] = useState(
    bookingData.firstname + ' ' + bookingData.lastname
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    try {
      const saveBooking = await axios.post('/api/booking', bookingData);

      if (saveBooking.data.success) {
        const result = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: `${window.location.origin}/checkout/success`,
            payment_method_data: {
              billing_details: {
                name,
                email,
                phone,
              },
            },
          },
          redirect: 'if_required',
        });

        if (result.error) {
          toast.error(result.error.message || 'Payment failed');
        } else {
          toast.success('Booking Created Successfully');
          setTimeout(() => {
            router.push('/');
          }, 2000);
        }
      } else {
        throw new Error('Failed to save booking');
      }
    } catch (error: any) {
      console.error(error);
      throw new Error('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label>Email</label>
      <input
        className="input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />

      <label>Phone</label>
      <input
        className="input"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone"
        required
      />

      <label>Cardholder Name</label>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name on card"
        required
      />

      <PaymentElement />

      <button className="pay-btn">Pay Now</button>

      <p>{message}</p>

      <style jsx>{`
        .payment-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 20px;
        }
        .input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .pay-btn {
          padding: 12px;
          background: #1a1f71;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
        }
      `}</style>
    </form>
  );
};
export default PaymentForm;
