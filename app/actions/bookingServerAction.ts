'use server';

import axios from 'axios';

export const checkAvailability = async (data: any) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
    const res = await axios.post(`${baseUrl}/api/checkAvailability`, data);
    return res.data;
  } catch (err: any) {
    console.error(err);
    return {
      success: false,
      error: err.response?.data?.error || 'Failed to fetch availability',
    };
  }
};

export const savebooking = async (data: any) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
    const res = await axios.post(`${baseUrl}/api/booking`, data);
    return res.data;
  } catch (err: any) {
    console.error(err);
    return {
      success: false,
      error: err.response?.data?.error || 'Failed to save booking',
    };
  }
};
