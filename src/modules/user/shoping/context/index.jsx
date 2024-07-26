import React, { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import useCustomSelector from '../utils/useCustomSelector';
import { CLEAR_PRODUCTS, FETCH_DATA } from '../store/reducer/constants';
import { useDispatch } from 'react-redux';
import { FILTER_PAGINATION } from '../store/reducer/filterConstants';
import useProducerFilterShopping from '../../../../useCustom/user/useProducerFilterShopping';
import { useLocation } from 'react-router-dom';

export const ShoppingContext = createContext({});

const ShoppingProvider = ({ children }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const dispatch = useDispatch();
  const { items } = useCustomSelector();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const querySearch = queryParams.get('keyword');

  const { pagination, limit, category, priceRange, lastPage } =
    useProducerFilterShopping();
  const fetchItems = useCallback(
    (page = pagination) => {
      const filter = {
        product_name: querySearch,
        category_name: category[0],
        page: page,
        price_from: priceRange[0],
        price_to: priceRange[1],
      };
      dispatch({ type: FILTER_PAGINATION, payload: page });
      dispatch({ type: FETCH_DATA, payload: filter });
    },
    [querySearch, limit, dispatch, pagination, priceRange, category]
  );

  useEffect(() => {
    dispatch({ type: CLEAR_PRODUCTS });
    fetchItems(1);
    setLastScrollTop(0);
    window.scrollTo(0, 0);
  }, [querySearch, category, priceRange, lastPage]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      if (scrollTop - lastScrollTop >= windowHeight && lastPage > pagination) {
        fetchItems(pagination + 1);
        setLastScrollTop(scrollTop);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [querySearch, lastScrollTop, pagination, fetchItems, lastPage]);

  return (
    <ShoppingContext.Provider value={{ items }}>
      {children}
    </ShoppingContext.Provider>
  );
};

ShoppingProvider.propTypes = {
  children: PropTypes.element,
};

export default ShoppingProvider;
