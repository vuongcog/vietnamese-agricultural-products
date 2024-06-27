import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
} from "@chakra-ui/react";

const ProductFilter = ({ onSubmit }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    priceRange: [0, 1000],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handlePriceChange = (value) => {
    setFilters({ ...filters, priceRange: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(filters);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      borderWidth={1}
      borderRadius="md"
    >
      <FormControl mb={4}>
        <FormLabel>Keyword</FormLabel>
        <Input
          type="text"
          name="keyword"
          value={filters.keyword}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Category</FormLabel>
        <Select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="clothing">Clothing</option>
        </Select>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Price Range</FormLabel>
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          step={10}
          onChangeEnd={handlePriceChange}
          onChange={handlePriceChange}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text mt={2}>
          From: ${filters.priceRange[0]} - To: ${filters.priceRange[1]}
        </Text>
      </FormControl>

      <Button type="submit" colorScheme="teal" width="full">
        Filter
      </Button>
    </Box>
  );
};

export default ProductFilter;
