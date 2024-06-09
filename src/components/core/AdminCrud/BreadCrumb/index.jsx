import React from "react";
import styles from "./styles.module.scss";
import SearchInput from "../SearchInput";
import PropTypes from "prop-types";
const BreadCrumb = ({ isSearchInput, onChangeSearchText, searchText }) => {
  return (
    <div className={`${styles.container} text-white text-center`}>
      {isSearchInput && (
        <SearchInput
          onChangeSearchText={onChangeSearchText}
          searchText={searchText}
        ></SearchInput>
      )}
    </div>
  );
};
BreadCrumb.propTypes = {
  isSearchInput: PropTypes.string,
};

export default BreadCrumb;
