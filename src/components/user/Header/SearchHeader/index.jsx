import React from "react";
import styles from "./styles.module.scss";

const SearchHeader = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchHeader;
