'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { savebooking } from '../actions/bookingServerAction';
import { Button } from '@heroui/react';

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  type: string | null;
  onlineinterview: boolean;
  startdate: string;
  enddate: string;
  interviewtime: string;
  duration: string;
}

export default function ReservationPage() {
  const router = useRouter();

  const [btnLoader, setBtnLoader] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  const [startdateParam, setStartdateParam] = useState('');
  const [enddateParam, setEnddateParam] = useState('');
  const [durationParam, setDurationParam] = useState('');
  const [timeParam, setTimeParam] = useState('');

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    setCategory(search.get('category'));
    setStartdateParam(search.get('startdate') || '');
    setEnddateParam(search.get('enddate') || '');
    setDurationParam(search.get('duration') || '');
    setTimeParam(search.get('time') || '');
  }, []);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      description: '',
      type: category,
      onlineinterview: category === 'interview',
      startdate: startdateParam,
      enddate: category === 'bhagwat' ? enddateParam : '',
      interviewtime: category === 'interview' ? timeParam : '',
      duration: category === 'interview' ? durationParam : '',
    },
  });

  useEffect(() => {
    setValue('type', category);
    setValue('onlineinterview', category === 'interview');
    setValue('startdate', startdateParam);
    setValue('enddate', category === 'bhagwat' ? enddateParam : '');
    setValue('interviewtime', category === 'interview' ? timeParam : '');
    setValue('duration', category === 'interview' ? durationParam : '');
  }, [
    category,
    startdateParam,
    enddateParam,
    durationParam,
    timeParam,
    setValue,
  ]);

  const onSubmit = async (data: FormValues) => {
    try {
      setBtnLoader(true);
      // const res = await savebooking(data);

      const res = await savebooking(data);
      console.log(res);
      if (res.success) {
        setTimeout(() => {
          router.push('/checkout');
        }, 1000);
      }
    } catch (error) {
      toast.error('Failed to create booking');
    } finally {
      setBtnLoader(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="relative w-full h-full min-h-[600px]">
            <Image
              src="/banner/reservatiobanner.jpg"
              alt="Reservation Banner"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-xl rounded-2xl p-10 space-y-10"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">Reserve your slot</h1>
            <p className="text-gray-500">
              Secure a confirmed reservation — elegant and simple.
            </p>
          </div>

          <div className="border rounded-2xl p-6 bg-gray-50 space-y-4">
            <h2 className="text-lg font-semibold">Reservation Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Category
                </label>
                <input
                  className="border p-3 rounded bg-gray-200 text-gray-600 w-full"
                  {...register('type')}
                  disabled
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Start Date
                </label>
                <input
                  className="border p-3 rounded bg-gray-200 text-gray-600 w-full"
                  {...register('startdate')}
                  disabled
                />
              </div>

              {category === 'bhagwat' && (
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    End Date
                  </label>
                  <input
                    className="border p-3 rounded bg-gray-200 text-gray-600 w-full"
                    {...register('enddate')}
                    disabled
                  />
                </div>
              )}

              {category === 'interview' && (
                <>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">
                      Interview Time
                    </label>
                    <input
                      className="border p-3 rounded bg-gray-200 text-gray-600 w-full"
                      {...register('interviewtime')}
                      disabled
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">
                      Duration
                    </label>
                    <input
                      className="border p-3 rounded bg-gray-200 text-gray-600 w-full"
                      {...register('duration')}
                      disabled
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Your Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  First Name
                </label>
                <input
                  className="border p-3 rounded bg-gray-50 w-full"
                  placeholder="First name"
                  {...register('firstname', {
                    required: 'First name is required',
                  })}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Last Name
                </label>
                <input
                  className="border p-3 rounded bg-gray-50 w-full"
                  placeholder="Last name"
                  {...register('lastname', {
                    required: 'Last name is required',
                  })}
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastname.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Email
                </label>
                <input
                  className="border p-3 rounded bg-gray-50 w-full"
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Phone
                </label>
                <input
                  className="border p-3 rounded bg-gray-50 w-full"
                  placeholder="Phone"
                  {...register('phone', { required: 'Phone is required' })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600 mb-1 block">
                  Address
                </label>
                <input
                  className="border p-3 rounded bg-gray-50 w-full"
                  placeholder="Address"
                  {...register('address', { required: 'Address is required' })}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Additional Notes
              </label>
              <textarea
                className="border p-3 rounded w-full bg-gray-50"
                placeholder="Anything you'd like us to know?"
                {...register('description', {
                  required: 'Please provide a note',
                })}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <p className="font-semibold">You are booking</p>
            <p className="text-green-600 font-semibold">Available</p>
          </div>

          <Button
            type="submit"
            disabled={btnLoader}
            className={`w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl text-lg ${
              btnLoader ? 'cursor-not-allowed opacity-70' : ''
            }`}
          >
            {btnLoader && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            {btnLoader ? 'Processing...' : 'Proceed to Payment'}
          </Button>

          <p className="text-center text-gray-400 text-sm">
            Have an unforgettable experience with us!
          </p>
        </form>
      </div>
    </div>
  );
}
