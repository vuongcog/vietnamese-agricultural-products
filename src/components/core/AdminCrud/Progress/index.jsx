import React from "react";
import { CircularProgress } from "@chakra-ui/react";
import styles from "./styles.module.scss";
const ProgressFeching = () => {
  return (
    <div className={styles.container}>
      <CircularProgress
        isIndeterminate={true}
        value={100} // Giá trị này sẽ là 100% và làm cho CircularProgress biến mất
        color="green"
        size="100px"
      />
    </div>
  );
};

export default ProgressFeching;
