import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import PropTypes from '../../../utils/prop-types';

function QuantitySelector({ value, onSetNumber, max, min }) {
  const handleChange = valueString => {
    const newValue = Number(valueString);
    onSetNumber(newValue);
  };

  return (
    <NumberInput
      size="sm"
      maxW="100px"
      min={min ? min : 0}
      max={max}
      value={value}
      onChange={handleChange}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
QuantitySelector.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
};
export default QuantitySelector;
