import React, { createContext, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import useCustomSelector from "../utils/useCustomSelector";
import { FETCH_DATA } from "../store/reducer/constants";
import { useDispatch } from "react-redux";
import { FILTER_PAGINATION } from "../store/reducer/filterConstants";
import useProducerFilterShopping from "../../../../useCustom/user/useProducerFilterShopping";

export const ShoppingContext = createContext({});

const ShoppingProvider = ({ children }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const usedispatch = useDispatch();
  const { items } = useCustomSelector();
  const { pagination, limit, search, category, priceRange } =
    useProducerFilterShopping();
  const fetchItems = useCallback(() => {
    const filter = {
      q: search,
      num: limit,
      page: pagination,
    };
    usedispatch({ type: FILTER_PAGINATION, payload: pagination + 1 });
    usedispatch({ type: FETCH_DATA, payload: { ...filter } });
  }, [search, limit, usedispatch, pagination]);

  useEffect(() => {
    fetchItems();
  }, [search, category, priceRange]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      if (scrollTop - lastScrollTop >= windowHeight) {
        fetchItems();
        setLastScrollTop(scrollTop);
        usedispatch({ type: FILTER_PAGINATION, payload: pagination + 1 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, pagination]);
  return (
    <ShoppingContext.Provider value={{ items: items }}>
      {children}
    </ShoppingContext.Provider>
  );
};

ShoppingProvider.propTypes = {
  children: PropTypes.element,
};

export default ShoppingProvider;
