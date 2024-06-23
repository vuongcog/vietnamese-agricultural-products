import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const UserName = ({ category_name }) => {
  return (
    <div className={styles.container}>
      <SupportAgentIcon className={styles.icon}></SupportAgentIcon>
      <span className={`${styles.label}`}>{category_name}</span>
    </div>
  );
};
UserName.propTypes = {
  link: PropTypes.string,
};
export default UserName;
