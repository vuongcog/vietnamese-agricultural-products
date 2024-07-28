import React, { useState } from 'react';

const SortSelector = ({ onSortChange }) => {
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
    <div>
      <label>
        Sort By:
        <select value={sortField} onChange={handleSortFieldChange}>
          <option value="created_at">Date Created</option>
          <option value="updated_at">Date Updated</option>
          <option value="status">Status</option>
        </select>
      </label>
      <label>
        Direction:
        <select value={sortDirection} onChange={handleSortDirectionChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};

export default SortSelector;
