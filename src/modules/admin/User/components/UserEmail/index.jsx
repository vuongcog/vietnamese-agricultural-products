import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./styles.module.scss";
import PropTypes from "../../../../../utils/prop-types";

const UserEmail = ({ email }) => {
  return (
    <div className={styles.container}>
      <EmailIcon className={styles.icon} />
      <span className={styles.email}>{email}</span>
    </div>
  );
};
UserEmail.propTypes = {
  email: PropTypes.string,
};

export default UserEmail;
