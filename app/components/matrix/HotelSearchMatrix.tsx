'use client';

import { Select, SelectItem, Button } from '@heroui/react';
import { useState } from 'react';

const HotelSearchMatrix: React.FC = () => {
  const hotels = [
    'The Taj Mahal Palace',
    'Marriott Downtown',
    'Holiday Inn Express',
    'Hilton Garden Inn',
    'Radisson Blu',
    'ITC Grand Bharat',
    'Seaside Resort & Spa',
    'Mountain View Lodge',
    'Urban Boutique Hotel',
    'Grand Plaza Hotel',
  ];

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row items-end gap-4 w-full">
          <div className="flex-1 w-full lg:max-w-xs">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose Your Hotel
            </label>
            <Select
              size="lg"
              radius="lg"
              placeholder="Select a hotel..."
              className="w-full"
              classNames={{
                trigger:
                  'bg-white border-2 border-gray-200 hover:border-[#028768] transition-all duration-300 h-14 data-[hover=true]:border-[#028768] data-[hover=true]:shadow-lg pr-4',
                value: 'text-gray-800 text-base font-medium',
                popover:
                  'bg-white border border-gray-200 shadow-xl rounded-xl mt-2',
                listbox: 'bg-white p-2',
                selectorIcon: 'hidden',
              }}
            >
              {hotels.map((hotel) => (
                <SelectItem
                  key={hotel}
                  value={hotel}
                  classNames={{
                    base: 'rounded-lg px-3 py-3 data-[hover=true]:bg-[#028768]/10 data-[selectable=true]:focus:bg-[#028768]/10 transition-colors duration-200',
                    title:
                      'text-gray-800 font-medium group-data-[selected=true]:text-[#028768] group-data-[selected=true]:font-semibold',
                  }}
                >
                  {hotel}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex-1 w-full lg:max-w-md">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Check-in Check-out
            </label>
            <div className="flex gap-3 w-full">
              <div className="flex-1">
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full h-14 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#028768] focus:border-[#028768] transition-all duration-300 bg-white text-gray-800 font-medium hover:border-gray-300"
                />
              </div>

              <div className="flex-1">
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  min={checkInDate}
                  className="w-full h-14 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#028768] focus:border-[#028768] transition-all duration-300 bg-white text-gray-800 font-medium hover:border-gray-300"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto lg:min-w-40">
            <Button
              color="primary"
              radius="lg"
              size="lg"
              className="bg-linear-to-r from-[#028768] to-[#02a680] hover:from-[#026e54] hover:to-[#028768] text-white font-bold px-8 h-14 w-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Find Hotels
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchMatrix;
