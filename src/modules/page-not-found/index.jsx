import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss"; // Import the SCSS module

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.animationContainer}>
        <div className={styles.circle}></div>
        <div className={styles.square}></div>
        <div className={styles.triangle}></div>
      </div>
      <div className={styles.messageContainer}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
