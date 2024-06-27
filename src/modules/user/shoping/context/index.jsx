import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { reducerProductList } from "../store/reducer/reducer";
import PropTypes from "prop-types";

import warcherSagaProducrtList from "../store/saga/saga";
import {
  ejectReducer,
  ejectReducersAndSagas,
  ejectSaga,
  injectReducer,
  injectReducersAndSagas,
  injectSaga,
} from "../../../../utils/fetch-cancel-saga-reducer-with-key";
import useCustomSelector from "../utils/useCustomSelector";
import { FETCH_DATA } from "../store/reducer/constants";
import { useDispatch } from "react-redux";
import { refactorReducerFilter } from "../store/reducer/filterReducer";
import { useDebounce } from "../../../../utils/useDebounce";
import { FILTER_PAGINATION } from "../store/reducer/filterConstants";
import { initialFilterState } from "../store/constants/initialFilterState";

const redux = {
  keyReducer: "list-product-reducer",
  keySaga: "list-product-saga",
  reducer: reducerProductList,
  saga: warcherSagaProducrtList,
};

export const ShoppingContext = createContext({});

const ShoppingProvider = ({ children }) => {
  useMemo(() => {
    injectReducer("filter", refactorReducerFilter({ ...initialFilterState }));
    injectReducersAndSagas(redux);
  }, []);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const usedispatch = useDispatch();
  const { items, pagination, limit, search } = useCustomSelector();
  const debounceSearch = useDebounce(search, 500);

  const fetchItems = useCallback(() => {
    const filter = {
      q: debounceSearch,
      num: limit,
      page: pagination,
    };
    usedispatch({ type: FILTER_PAGINATION, payload: pagination + 1 });
    usedispatch({ type: FETCH_DATA, payload: { ...filter } });
  }, [debounceSearch, limit, usedispatch, pagination]);
  useEffect(() => {
    injectReducersAndSagas(redux);
    injectReducer("filter", refactorReducerFilter({ ...initialFilterState }));
    return () => {
      ejectReducersAndSagas(redux);
      ejectReducer("filter");
    };
  }, []);

  useEffect(() => {
    fetchItems();
  }, [debounceSearch]);

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
