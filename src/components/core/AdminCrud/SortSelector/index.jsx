import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import {
  SORT_FIELD_OPTIONS,
  DEFAULT_SORT_FIELDS,
  SORT_DIRECTION_OPTIONS,
} from './constants';

const getInitialSortFields = extraFields => {
  const defaultFields = SORT_FIELD_OPTIONS.filter(field =>
    DEFAULT_SORT_FIELDS.includes(field.value)
  );
  const extraFieldOptions = SORT_FIELD_OPTIONS.filter(field =>
    extraFields.includes(field.value)
  );
  return [...defaultFields, ...extraFieldOptions];
};

const SortSelector = ({ onSortChange, extraFields = [] }) => {
  const sortFieldOptions = getInitialSortFields(extraFields);
  const initialField = sortFieldOptions[0].value;
  const initialDirection = SORT_DIRECTION_OPTIONS[initialField][0].value;

  const [sortField, setSortField] = useState(initialField);
  const [sortDirection, setSortDirection] = useState(initialDirection);

  const handleSortFieldChange = e => {
    const newSortField = e.target.value;
    setSortField(newSortField);
    const defaultDirection = SORT_DIRECTION_OPTIONS[newSortField][0].value;
    setSortDirection(defaultDirection);
    onSortChange(newSortField, defaultDirection);
  };

  const handleSortDirectionChange = e => {
    const newSortDirection = e.target.value;
    setSortDirection(newSortDirection);
    onSortChange(sortField, newSortDirection);
  };

  return (
    <div className="flex text-black">
      <Select value={sortField} onChange={handleSortFieldChange}>
        {sortFieldOptions.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
      <Select value={sortDirection} onChange={handleSortDirectionChange}>
        {SORT_DIRECTION_OPTIONS[sortField].map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SortSelector;
