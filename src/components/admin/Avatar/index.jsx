import React from "react";
import PropTypes from "prop-types";
import { AVATAR } from "../../../constants/avatar";
import styles from "./styles.module.scss";
const AddminAvatar = ({ info }) => {
  return (
    <div className={styles.container}>
      <AddminAvatar.Avatar />
      <AddminAvatar.Info></AddminAvatar.Info>
    </div>
  );
};

AddminAvatar.Avatar = function AdminAvatar() {
  return (
    <img className={styles.container__avatar} src={AVATAR.admin} alt="admin" />
  );
};
AddminAvatar.Info = function AdminAvatar({ name, phone }) {
  return (
    <div className={styles.container__wrapperInfo}>
      <div>{name}</div>
      <div>{phone}</div>
    </div>
  );
};
AddminAvatar.propTypes = {
  info: PropTypes.object,
};
AddminAvatar.Info.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
AddminAvatar.Info.defaultProps = {
  name: "Vương",
  phone: "0348079230",
};

AddminAvatar.defaultProps = {
  name: "Vương",
};

// Setting display name for the component
AddminAvatar.displayName = "AddminAvatar";
export default AddminAvatar;
