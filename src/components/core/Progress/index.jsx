import React from "react";
import { CircularProgress, layout } from "@chakra-ui/react";
import styles from "./styles.module.scss";
const ProgressFullScreen = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <CircularProgress
          isIndeterminate={true}
          value={100} // Giá trị này sẽ là 100% và làm cho CircularProgress biến mất
          color="black"
          size="100px"
        />
      </div>
    </div>
  );
};

export default ProgressFullScreen;
