import React from "react";
import styles from "./styles.module.scss";

const SkeletonCart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
        <div className={`${styles.skeleton} ${styles.skeletonPrice}`} />
        <div className={`${styles.skeleton} ${styles.skeletonText}`} />
      </div>
    </div>
  );
};

export default SkeletonCart;
