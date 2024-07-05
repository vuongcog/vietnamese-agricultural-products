import React from "react";
import PropTypes from "prop-types";
import { AVATAR } from "../../../constants/avatar";
import styles from "./styles.module.scss";
import SelectLanguage from "../../user/Header/SelectLang";

const AdminAvatar = ({ info }) => {
  return (
    <div className={styles["admin-avatar"]}>
      <Avatar />
      <Info name={info.name} phone={info.phone} />
    </div>
  );
};

const Avatar = () => {
  return (
    <img
      className={styles["admin-avatar__image"]}
      src={AVATAR.admin}
      alt="Admin"
    />
  );
};

const Info = ({ name, phone }) => {
  return (
    <div className={styles["admin-avatar__info"]}>
      <div className={styles["admin-avatar__name"]}>{name}</div>
      <div className={styles["admin-avatar__phone"]}>{phone}</div>
    </div>
  );
};

AdminAvatar.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};

Info.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};

Info.defaultProps = {
  name: "Vương",
  phone: "0348079230",
};

AdminAvatar.defaultProps = {
  info: {
    name: "Vương",
    phone: "0348079230",
  },
};

export default AdminAvatar;
