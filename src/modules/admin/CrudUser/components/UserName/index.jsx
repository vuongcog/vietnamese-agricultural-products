import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const UserName = ({ name }) => {
  return (
    <div className={styles.container}>
      <SupportAgentIcon></SupportAgentIcon>
      {name}
    </div>
  );
};
UserName.propTypes = {
  name: PropTypes.string,
};
export default UserName;
