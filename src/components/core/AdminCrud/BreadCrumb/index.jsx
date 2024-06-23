import React, { useContext } from "react";
import styles from "./styles.module.scss";
import SearchInput from "../SearchInput";
import PropTypes from "prop-types";
import DialogCreateForm from "../../DialogCreateForm";
import { AuthContext } from "../../../../contexts/AuthContext";

const BreadCrumb = ({
  isSearchInput,
  onChangeSearchText,
  searchText,
  schemaForm,
  endpoint,
}) => {
  const { logout } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      {isSearchInput && (
        <SearchInput
          onChangeSearchText={onChangeSearchText}
          searchText={searchText}
        />
      )}
      <DialogCreateForm endpoint={endpoint} schemaForm={schemaForm} />
      <button className={styles.logoutButton} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

BreadCrumb.propTypes = {
  schemaForm: PropTypes.object,
  endpoint: PropTypes.string,
  onChangeSearchText: PropTypes.func,
  searchText: PropTypes.string,
  isSearchInput: PropTypes.bool,
};

export default BreadCrumb;
