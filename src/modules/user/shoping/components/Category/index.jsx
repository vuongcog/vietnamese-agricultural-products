import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
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
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import {
  FILTER_CATEGORY,
  FILTER_PRICE_RANGE,
  FILTER_SEARCH,
} from '../../store/reducer/filterConstants';
import useProducerFilterShopping from '../../../../../useCustom/user/useProducerFilterShopping';
import { useTranslation } from 'react-i18next';
import langs from '../../langs';
import useProducerCategory from '../../../../../useCustom/user/useProducerCategory';
import { formattedNumber } from '../../../../../utils/format-number';

const ProductFilter = () => {
  const { t } = useTranslation();
  const { category, priceRange } = useProducerFilterShopping();
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  const [selectedCategories, setSelectedCategories] = useState(category);
  const { categories } = useProducerCategory();
  const suggestions = categories?.map(item => item.category_name);
  const dispatch = useDispatch();

  const handleCategoryChange = e => {
    const { value } = e.target;
    if (!selectedCategories.includes(value) && value !== '') {
      // const newCategories = [...selectedCategories, value];
      const newCategories = [value];
      setSelectedCategories(newCategories);
      dispatch({ type: FILTER_CATEGORY, payload: newCategories });
    }
  };

  const debounceDispatch = useCallback(
    debounce(value => {
      dispatch({ type: FILTER_PRICE_RANGE, payload: value });
    }, 300),
    [dispatch]
  );

  const handlePriceChange = value => {
    setLocalPriceRange(value);
    debounceDispatch(value);
  };

  const removeCategory = category => {
    const newCategories = selectedCategories.filter(item => item !== category);
    setSelectedCategories(newCategories);
    dispatch({ type: FILTER_CATEGORY, payload: newCategories });
  };
  return (
    <Box
      as="form"
      p={4}
      paddingTop={14}
      w={200}
      borderWidth={1}
      borderRadius="md"
    >
      <FormControl mb={4}>
        <FormLabel>{t(langs.category)}</FormLabel>
        <Select name="category" value="" onChange={handleCategoryChange}>
          <option value="">All</option>
          {suggestions?.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Wrap mt={2}>
          {selectedCategories.map(category => (
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
        <FormLabel>{t(langs.priceRange)}</FormLabel>
        <RangeSlider
          aria-label={['min', 'max']}
          min={0}
          max={10000000}
          step={10}
          value={localPriceRange}
          onChange={val => handlePriceChange(val)}
          onChangeEnd={val => handlePriceChange(val)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text fontSize={14} mt={2}>
          {formattedNumber(localPriceRange[0])} đồng -{' '}
          {formattedNumber(localPriceRange[1])} đồng
        </Text>
      </FormControl>
    </Box>
  );
};

export default ProductFilter;
