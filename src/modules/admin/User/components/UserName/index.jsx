import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import classNames from "classnames";
const UserName = ({ name, role }) => {
  const mappingRole = {
    manager: "text-red-600",
    admin: "text-orange-400",
    staff: "text-yellow-600",
    customer: "text-green-600",
  };
  return (
    <div className={styles.container}>
      <SupportAgentIcon
        className={classNames(styles.icon, mappingRole[role])}
      ></SupportAgentIcon>
      <span className={`${styles.label}`}>{name}</span>
    </div>
  );
};
UserName.propTypes = {
  role: PropTypes.string,
  name: PropTypes.string,
};
export default UserName;
