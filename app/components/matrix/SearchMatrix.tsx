'use client';

import { Card, CardBody, Button, Select, SelectItem } from '@heroui/react';

const SearchMatrix = () => {
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
                  placeholder="Choose a Category"
                  size="lg"
                  radius="lg"
                  className="rounded-xl"
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
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Start Date
                </label>

                <input
                  type="date"
                  className="
                    h-14 px-4 w-full rounded-xl border border-gray-300 
                    text-gray-800 bg-white
                    hover:border-gray-400
                    focus:outline-none focus:ring-2 focus:ring-primary/40
                    transition-all
                  "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  End Date
                </label>

                <input
                  type="date"
                  className="
                    h-14 px-4 w-full rounded-xl border border-gray-300 
                    text-gray-800 bg-white
                    hover:border-gray-400
                    focus:outline-none focus:ring-2 focus:ring-primary/40
                    transition-all
                  "
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                color="primary"
                size="lg"
                className="px-10 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Search
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default SearchMatrix;
