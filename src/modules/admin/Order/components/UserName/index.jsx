import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const UserName = ({ name }) => {
  return (
    <div className={styles.container}>
      <SupportAgentIcon className={styles.icon}></SupportAgentIcon>
      <span className={`${styles.label}`}>{name}</span>
    </div>
  );
};
UserName.propTypes = {
  link: PropTypes.string,
};
export default UserName;
