import React from "react";
import styles from "./styles.module.scss";
import SearchInput from "../SearchInput";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ADD_DATA } from "../Store/constants";

const BreadCrumb = ({
  handleCreate,
  isSearchInput,
  onChangeSearchText,
  searchText,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={`${styles.container} text-white text-center`}>
      {isSearchInput && (
        <SearchInput
          onChangeSearchText={onChangeSearchText}
          searchText={searchText}
        ></SearchInput>
      )}
      <button
        onClick={() => {
          dispatch({ type: ADD_DATA, payload: handleCreate });
        }}
      >
        New Item
      </button>
    </div>
  );
};
BreadCrumb.propTypes = {
  handleCreate: PropTypes.func,
  onChangeSearchText: PropTypes.func,
  searchText: PropTypes.string,
  isSearchInput: PropTypes.string,
};

export default BreadCrumb;
