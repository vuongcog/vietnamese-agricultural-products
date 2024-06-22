import React from "react";
import styles from "./styles.module.scss";
import SearchInput from "../SearchInput";
import PropTypes from "prop-types";
import DialogCreateForm from "../../DialogCreateForm";

const BreadCrumb = ({
  isSearchInput,
  onChangeSearchText,
  searchText,
  schemaForm,
  endpoint,
}) => {
  return (
    <div className={`${styles.container} text-white text-center`}>
      {isSearchInput && (
        <SearchInput
          onChangeSearchText={onChangeSearchText}
          searchText={searchText}
        ></SearchInput>
      )}

      <DialogCreateForm
        endpoint={endpoint}
        schemaForm={schemaForm}
      ></DialogCreateForm>
    </div>
  );
};
BreadCrumb.propTypes = {
  schemaForm: PropTypes.object,
  handleCreate: PropTypes.func,
  onChangeSearchText: PropTypes.func,
  searchText: PropTypes.string,
  isSearchInput: PropTypes.string,
};

export default BreadCrumb;
