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

const Avatar = () => {
  return (
    <img className={styles.container__avatar} src={AVATAR.admin} alt="admin" />
  );
};
const Info = ({ name, phone }) => {
  return (
    <div className={styles.container__wrapperInfo}>
      <div>{name}</div>
      <div>{phone}</div>
    </div>
  );
};
AddminAvatar.Avatar = Avatar;
AddminAvatar.Info = Info;

AddminAvatar.propTypes = {
  info: PropTypes.object,
};
Info.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
Info.defaultProps = {
  name: "Vương",
  phone: "0348079230",
};

AddminAvatar.defaultProps = {
  name: "Vương",
};

// Setting display name for the component
// AddminAvatar.displayName = "AddminAvatar";
export default AddminAvatar;
