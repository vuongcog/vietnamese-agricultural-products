import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./styles.module.scss";
const UserEmail = ({ snippet }) => {
  return (
    <div className={styles.container}>
      <EmailIcon className={styles.icon}></EmailIcon>
      <span className={`${styles.email}`}>{snippet}</span>
    </div>
  );
};

export default UserEmail;
