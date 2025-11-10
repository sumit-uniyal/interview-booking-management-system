'use client';

import { useState } from 'react';
import SearchableDropdown from '../inputs/SearchableDropdown';

const HotelSearchMatrix = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const options = [
    'Hotel California',
    'The Ritz',
    'Marriott',
    'Hilton',
    'Intercontinental',
    'Shangri-La',
    'Hyatt Regency',
  ];
  return (
    <div>
      <SearchableDropdown
        options={options}
        label="Search Hotels"
        onChange={(value) => setSelected(value)}
      />
    </div>
  );
};

export default HotelSearchMatrix;
