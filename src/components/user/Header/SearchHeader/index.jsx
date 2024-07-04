import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchFilter } from "../../../../modules/user/shoping/store/selector/selector";
import { FILTER_SEARCH } from "../../../../modules/user/shoping/store/reducer/filterConstants";
import { useNavigate, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import styles from "./styles.module.scss";

const SearchHeader = () => {
  const search = useSelector(getSearchFilter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState(search);

  const debouncedSearch = debounce((value) => {
    dispatch({ type: FILTER_SEARCH, payload: value });
    if (location.pathname === "/") {
      navigate(`/shopping?keyword=${encodeURIComponent(value)}`);
    } else {
      navigate(`?keyword=${encodeURIComponent(value)}`);
    }
  }, 500);

  useEffect(() => {
    debouncedSearch(searchValue);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchValue]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        value={searchValue}
        onChange={handleSearchChange}
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchHeader;
