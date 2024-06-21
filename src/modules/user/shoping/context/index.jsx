import React, {
  createContext,
  useRef,
  useState,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import axios from "axios";
import { initialState, reducer } from "../storeLocal/reducer";
import { SET_ITEMS, SET_LOADING, SET_PAGE } from "../constants/constants";
import PropTypes from "prop-types";

export const ShoppingContext = createContext({});

const ShoppingProvider = ({ children }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const elementRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  // Định nghĩa fetchItems sử dụng useCallback
  const fetchItems = useCallback(
    async (page = state.page) => {
      dispatch({ type: SET_LOADING, payload: true });
      const res = await axios.post(
        "https://google.serper.dev/search",
        {
          q: "apple inc",
          page: page,
          num: state.limit,
        },
        {
          headers: {
            "X-API-KEY": "07521c846036c9101a98c2c34c6bf4385b65dcdb",
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: SET_LOADING, payload: false });
      return res.data;
    },
    [state.page, state.limit, dispatch]
  );

  // Định nghĩa handleScroll sử dụng useCallback
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight
    ) {
      return;
    }
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop + elementRef.current.clientHeight) {
      setLastScrollTop(scrollTop);
      fetchItems()
        .then((res) => {
          dispatch({ type: SET_ITEMS, payload: res.organic });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      dispatch({ type: SET_PAGE, payload: state.page + 1 });
      fetchItems(state.page + 1);
    }
  }, [lastScrollTop, fetchItems, dispatch, state.page]);

  // useEffect để thêm và loại bỏ sự kiện cuộn
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <ShoppingContext.Provider value={{ elementRef, items: state.items }}>
      {children}
    </ShoppingContext.Provider>
  );
};

ShoppingProvider.propTypes = {
  children: PropTypes.element,
};

export default ShoppingProvider;
