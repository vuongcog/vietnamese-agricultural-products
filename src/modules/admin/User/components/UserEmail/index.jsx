import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./styles.module.scss";
const UserEmail = ({ email }) => {
  return (
    <div className={styles.container}>
      <EmailIcon className={styles.icon}></EmailIcon>
      <span className={`${styles.email}`}>{email}</span>
    </div>
  );
};

export default UserEmail;
