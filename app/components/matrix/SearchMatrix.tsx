'use client';

import { useState } from 'react';
import { Tabs, Tab } from '@heroui/react';
import FlightSearchMatrix from './FlightSearchMatrix';
import HotelSearchMatrix from './HotelSearchMatrix';
import TourSearchMatrix from './TourSearchMatrix';

const SearchMatrix: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('flights');

  const tabConfig = [
    { key: 'flights', title: '✈️ Flight', component: <FlightSearchMatrix /> },
    { key: 'hotels', title: '🏨 Hotel', component: <HotelSearchMatrix /> },
    { key: 'transfer', title: '🚗 Transfer', component: <TourSearchMatrix /> },
  ];

  const activeTab = tabConfig.find((t) => t.key === selectedKey);

  return (
    <div className="flex justify-center w-full mt-8 mb-12">
      <div className="w-[70%] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        <Tabs
          selectedKey={selectedKey}
          onSelectionChange={(key: any) => setSelectedKey(key as string)}
          fullWidth
          variant="light"
          className="w-full border-b border-gray-200"
        >
          {tabConfig.map((tab) => (
            <Tab
              key={tab.key}
              title={tab.title}
              className={`py-4 text-lg font-medium transition-all duration-200 border-b-4 ${
                selectedKey === tab.key
                  ? 'text-[#028768] font-semibold border-[#028768]'
                  : 'text-gray-600 border-transparent hover:text-[#028768]'
              }`}
            />
          ))}
        </Tabs>
        <div className="p-8 bg-white">{activeTab?.component}</div>
      </div>
    </div>
  );
};

export default SearchMatrix;
