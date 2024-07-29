import React, { useState } from 'react';
import { Box, Select, FormControl, FormLabel } from '@chakra-ui/react';

const SortSelector = ({ onSortChange, options }) => {
  options = [
    { label: 'Ngày tạo', value: 'created_at' },
    { label: 'Ngày cập nhập', value: 'updated_at' },
    { label: 'Trạng thái', value: 'status' },
  ];
  const [sortField, setSortField] = useState('created_at');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSortFieldChange = e => {
    const newSortField = e.target.value;
    setSortField(newSortField);
    onSortChange(newSortField, sortDirection);
  };

  const handleSortDirectionChange = e => {
    const newSortDirection = e.target.value;
    setSortDirection(newSortDirection);
    onSortChange(sortField, newSortDirection);
  };

  return (
    <div className="flex text-black">
      <Select value={sortField} onChange={handleSortFieldChange}>
        {options.map(item => {
          return (
            <option key={item.label} value={item.value}>
              <span>{item.label}</span>
            </option>
          );
        })}
      </Select>
      <Select value={sortDirection} onChange={handleSortDirectionChange}>
        <option value="asc">Tăng dần</option>
        <option value="desc">Giảm dần</option>
      </Select>
    </div>
  );
};

export default SortSelector;
