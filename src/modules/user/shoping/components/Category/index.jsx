import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
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
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import useProducerFilter from "../../utils/useProducerFilter";
import {
  FILTER_CATEGORY,
  FILTER_PRICE_RANGE,
  FILTER_SEARCH,
} from "../../store/reducer/filterConstants";

const ProductFilter = ({ onSubmit }) => {
  const { category, priceRange } = useProducerFilter();
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  const [keyword, setKeyword] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(category);
  const dispatch = useDispatch();

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    debounceSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    if (!selectedCategories.includes(value) && value !== "") {
      const newCategories = [...selectedCategories, value];
      setSelectedCategories(newCategories);
      dispatch({ type: FILTER_CATEGORY, payload: newCategories });
    }
  };

  const debounceDispatch = useCallback(
    debounce((value) => {
      dispatch({ type: FILTER_PRICE_RANGE, payload: value });
    }, 300),
    [dispatch]
  );

  const debounceSearch = useCallback(
    debounce((value) => {
      dispatch({ type: FILTER_SEARCH, payload: value });
    }, 300),
    [dispatch]
  );
  const handlePriceChange = (value) => {
    setLocalPriceRange(value);
    debounceDispatch(value);
  };

  const removeCategory = (category) => {
    const newCategories = selectedCategories.filter(
      (item) => item !== category
    );
    setSelectedCategories(newCategories);
    dispatch({ type: FILTER_CATEGORY, payload: newCategories });
  };

  return (
    <Box as="form" p={4} borderWidth={1} borderRadius="md">
      <FormControl mb={4}>
        <FormLabel>Keyword</FormLabel>
        <Input
          type="text"
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Category</FormLabel>
        <Select name="category" value="" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="cachua">Cà chua</option>
          <option value="bapcai">Bắp cải</option>
          <option value="dau">Dâu</option>
          <option value="khoaitay">Khoai tây</option>
        </Select>
        <Wrap mt={2}>
          {selectedCategories.map((category) => (
            <WrapItem key={category}>
              <Tag size="md" colorScheme="teal" borderRadius="full">
                <TagLabel>{category}</TagLabel>
                <TagCloseButton onClick={() => removeCategory(category)} />
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Price Range</FormLabel>
        <RangeSlider
          aria-label={["min", "max"]}
          min={0}
          max={1000}
          step={10}
          value={localPriceRange}
          onChange={(val) => handlePriceChange(val)}
          onChangeEnd={(val) => handlePriceChange(val)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text mt={2}>
          From: ${localPriceRange[0]} - To: ${localPriceRange[1]}
        </Text>
      </FormControl>
    </Box>
  );
};

export default ProductFilter;
