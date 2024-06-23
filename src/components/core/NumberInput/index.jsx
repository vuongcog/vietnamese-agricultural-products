import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function QuantitySelector({ value, setValue, max, min }) {
  const handleChange = (valueString) => {
    const newValue = Number(valueString);
    setValue(newValue);
  };

  return (
    <NumberInput
      size="sm"
      maxW="100px"
      min={0}
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

export default QuantitySelector;
