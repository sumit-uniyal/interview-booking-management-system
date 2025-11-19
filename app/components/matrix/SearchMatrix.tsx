'use client';

import React from 'react';
import { Card, CardBody, Button, Select, SelectItem } from '@heroui/react';

const SearchMatrix = () => {
  return (
    <Card className="w-full max-w-4xl shadow-xl rounded-2xl p-8 bg-white">
      <CardBody className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800">Search</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CATEGORY */}
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

          {/* START DATE */}
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
              placeholder="Select start date"
            />
          </div>

          {/* END DATE */}
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
              placeholder="Select end date"
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
  );
};

export default SearchMatrix;
