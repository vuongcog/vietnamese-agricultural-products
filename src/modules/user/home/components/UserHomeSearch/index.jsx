import React from "react";
import styles from "./styles.module.scss";
const UserHomeSearch = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Vegetable"></input>
      <button type="button">Search</button>
    </div>
  );
};

export default UserHomeSearch;
