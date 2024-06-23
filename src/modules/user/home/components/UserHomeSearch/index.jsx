import React from "react";
import styles from "./styles.module.scss";

const UserHomeSearch = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Vegetable" className={styles.input} />
      <button type="button" className={styles.button}>
        Search
      </button>
    </div>
  );
};

export default UserHomeSearch;
