import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./styles.module.scss";

const UserPhone = ({ phone_num }) => {
  return (
    <div className={styles.container}>
      <PhoneIcon className={styles.icon} />
      <span className={styles.phone}>{phone_num}</span>
    </div>
  );
};

export default UserPhone;
