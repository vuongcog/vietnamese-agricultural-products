import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";
import styles from "./styles.module.scss";

const ProgressFullScreen = ({ autoHide }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [autoHide]);

  if (!isVisible) return null;

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <CircularProgress isIndeterminate color="white" size="100px" />
      </div>
    </div>
  );
};

export default ProgressFullScreen;
