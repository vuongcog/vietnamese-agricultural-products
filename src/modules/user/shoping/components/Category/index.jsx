import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
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
  Divider,
  Tooltip,
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
import useCustomSelector from '../../utils/useCustomSelector';
import { useNavigate } from 'react-router-dom';
import { INACTIVE } from '../../../../../constants/mapper-status';

const ProductFilter = () => {
  const { t } = useTranslation();
  const { category, priceRange } = useProducerFilterShopping();
  const { items } = useCustomSelector();
  const navigate = useNavigate();
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
    <div className={styles.container}>
      <div className={styles[`container-catetory`]}>
        <div className={styles[`header-category`]}>{t(langs.category)}</div>
        <Select
          border={'none'}
          name="category"
          value=""
          onChange={handleCategoryChange}
        >
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
              <Tag size="md" colorScheme="teal">
                <TagLabel>{category}</TagLabel>
                <TagCloseButton onClick={() => removeCategory(category)} />
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </div>

      <div className={styles.containerPrices}>
        <div className={styles.titlePrice}>{t(langs.priceRange)}</div>
        <RangeSlider
          aria-label={['min', 'max']}
          min={0}
          max={10000000}
          step={10}
          color={'red'}
          width={170}
          value={localPriceRange}
          onChange={val => handlePriceChange(val)}
          onChangeEnd={val => handlePriceChange(val)}
        >
          <RangeSliderTrack height="6px">
            <RangeSliderFilledTrack color={'red'} backgroundColor={'#255946'} />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>

        <Text fontSize={16} mt={2}>
          {parseFloat(localPriceRange[0]).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}
          {'  '}-{'  '}
          {parseFloat(localPriceRange[1]).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}{' '}
        </Text>
      </div>

      <div className={styles[`container-products`]}>
        <div className={styles[`header-products`]}>{'Sản phẩm'}</div>
        <div className={styles.products}>
          {items?.map(item => {
            if (item.status === INACTIVE) return null;
            return (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`/detail?slug=${item.product_slug}&id=${item.id}`);
                }}
                className={styles[`container-product`]}
              >
                <div className={styles[`content-product`]}>
                  <Tooltip
                    placement="top"
                    label={item.product_name}
                    aria-label="Full text"
                  >
                    <span className="text-black font-bold">
                      {item.product_name}
                    </span>
                  </Tooltip>
                  <div className={styles.product__prices}>
                    {parseFloat(item.unit_prices).toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </div>
                </div>
                <Divider orientation="vertical"></Divider>
                <img src={item.product_image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
