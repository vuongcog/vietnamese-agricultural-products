import React from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSearchFilter } from "../../../../modules/user/shoping/store/selector/selector";
import { FILTER_SEARCH } from "../../../../modules/user/shoping/store/reducer/filterConstants";

const SearchHeader = () => {
  const search = useSelector(getSearchFilter);
  const dispatch = useDispatch();
  return (
    <div className={styles.searchContainer}>
      <input
        value={search}
        onChange={(e) => {
          dispatch({ type: FILTER_SEARCH, payload: e.target.value });
        }}
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchHeader;
