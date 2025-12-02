'use client';

import { Card, CardBody, Button, Select, SelectItem } from '@heroui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { checkAvailability } from '@/actions/bookingServerAction';
import { useRouter } from 'next/navigation';

const SearchMatrix = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm();

  const selectedCategory = watch('category');

  const onSubmit = async (data: any) => {
    try {
      const response = await checkAvailability(data);
      if (response.available) {
        const query = Object.fromEntries(
          Object.entries({
            startdate: data.startdate,
            enddate: data.enddate,
            duration: data.duration,
            category: data.category,
            time: data.time,
          }).filter(([_, v]) => v)
        );

        const queryString = new URLSearchParams(query).toString();

        router.push(`/reservation${queryString ? `?${queryString}` : ''}`);
      } else {
        toast.error('Not available for this time');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    if (selectedCategory === 'bhagwat') {
      clearErrors(['time', 'duration']);
    } else if (selectedCategory === 'interview') {
      clearErrors(['enddate']);
    }
  }, [selectedCategory]);

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center relative flex items-center pt-24 md:pt-32"
      style={{ backgroundImage: 'url("/banner/bg.webp")' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <Card className="w-full shadow-xl rounded-2xl p-6 sm:p-8 bg-white">
          <CardBody className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Search
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Select Category
                </label>

                <Select
                  aria-label="category"
                  {...register('category', {
                    required: 'Category is required',
                  })}
                  placeholder="Choose a Category"
                  size="lg"
                  radius="lg"
                  classNames={{
                    trigger:
                      'h-14 border border-gray-300 rounded-xl hover:border-gray-400 transition-all focus:ring-2 focus:ring-primary/40 bg-white',
                    value: 'text-gray-800 text-base',
                    listboxWrapper:
                      'rounded-xl shadow-xl border border-gray-200 bg-white mt-2',
                    listbox: 'p-2 gap-1',
                    popoverContent: 'rounded-xl',
                    selectorIcon: 'hidden',
                  }}
                >
                  <SelectItem
                    key="interview"
                    className="px-3 py-2 text-base rounded-lg hover:bg-gray-100 transition"
                  >
                    Online Interview
                  </SelectItem>

                  <SelectItem
                    key="bhagwat"
                    className="px-3 py-2 text-base rounded-lg hover:bg-gray-100 transition"
                  >
                    Bhagwat
                  </SelectItem>
                </Select>

                {errors.category && (
                  <p className="text-red-600 text-sm">
                    {String(errors.category.message)}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Start Date
                </label>

                <input
                  {...register('startdate', {
                    required: 'Start date is required',
                  })}
                  aria-label="startdate"
                  type="date"
                  className="h-14 px-4 w-full rounded-xl border border-gray-300 text-gray-800 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />

                {errors.startdate && (
                  <p className="text-red-600 text-sm">
                    {String(errors.startdate.message)}
                  </p>
                )}
              </div>

              {selectedCategory === 'interview' ? (
                <>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Select Time
                    </label>

                    <Select
                      aria-label="time"
                      {...register('time', { required: 'Time is required' })}
                      placeholder="Choose Time"
                      size="lg"
                      radius="lg"
                      classNames={{
                        trigger:
                          'h-14 border border-gray-300 rounded-xl hover:border-gray-400 transition-all focus:ring-2 focus:ring-primary/40 bg-white',
                        value: 'text-gray-800 text-base',
                        listboxWrapper:
                          'rounded-xl shadow-xl border border-gray-200 bg-white mt-2',
                        listbox: 'p-2 gap-1',
                        popoverContent: 'rounded-xl',
                        selectorIcon: 'hidden',
                      }}
                    >
                      {[
                        '10:00 AM',
                        '11:00 AM',
                        '12:00 PM',
                        '01:00 PM',
                        '02:00 PM',
                        '03:00 PM',
                        '04:00 PM',
                        '05:00 PM',
                        '06:00 PM',
                        '07:00 PM',
                      ].map((t) => (
                        <SelectItem
                          key={t}
                          className="px-3 py-2 text-base rounded-lg hover:bg-gray-100 transition"
                        >
                          {t}
                        </SelectItem>
                      ))}
                    </Select>

                    {errors.time && (
                      <p className="text-red-600 text-sm">
                        {String(errors.time.message)}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Duration
                    </label>

                    <Select
                      aria-label="duration"
                      {...register('duration', {
                        required: 'Duration is required',
                      })}
                      placeholder="Choose Duration"
                      size="lg"
                      radius="lg"
                      classNames={{
                        trigger:
                          'h-14 border border-gray-300 rounded-xl hover:border-gray-400 transition-all focus:ring-2 focus:ring-primary/40 bg-white',
                        value: 'text-gray-800 text-base',
                        listboxWrapper:
                          'rounded-xl shadow-xl border border-gray-200 bg-white mt-2',
                        listbox: 'p-2 gap-1',
                        popoverContent: 'rounded-xl',
                        selectorIcon: 'hidden',
                      }}
                    >
                      {[
                        '30 min',
                        '1 hr',
                        '1:30 hr',
                        '2 hr',
                        '2:30 hr',
                        '3 hr',
                        '3:30 hr',
                        '4 hr',
                      ].map((d) => (
                        <SelectItem
                          key={d}
                          className="px-3 py-2 text-base rounded-lg hover:bg-gray-100 transition"
                        >
                          {d}
                        </SelectItem>
                      ))}
                    </Select>

                    {errors.duration && (
                      <p className="text-red-600 text-sm">
                        {String(errors.duration.message)}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    End Date
                  </label>

                  <input
                    {...register('enddate', {
                      required: 'End date is required',
                    })}
                    aria-label="enddate"
                    type="date"
                    className="h-14 px-4 w-full rounded-xl border border-gray-300 text-gray-800 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />

                  {errors.enddate && (
                    <p className="text-red-600 text-sm">
                      {String(errors.enddate.message)}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleSubmit(onSubmit)}
                color="primary"
                size="lg"
                className="px-10 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Check Availability
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default SearchMatrix;
