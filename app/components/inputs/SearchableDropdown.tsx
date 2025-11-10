'use client';

import { useState, useMemo } from 'react';
import { Input } from '@heroui/react';

interface SearchableDropdownProps {
  options: string[];
  label?: string;
  onChange?: (value: string | null) => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  label = 'Select an option',
  onChange,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Filter options based on query
  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
      ),
    [options, query]
  );

  const handleSelect = (value: string) => {
    setQuery(value);
    setIsOpen(false);
    onChange && onChange(value);
  };

  return (
    <div className="relative w-72">
      <Input
        value={query}
        placeholder={label}
        onChange={(e: any) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
        className="w-full"
      />

      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              onMouseDown={() => handleSelect(option)} // use onMouseDown to avoid blur before click
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
