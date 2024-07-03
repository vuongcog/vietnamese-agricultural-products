import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const UserAvatar = ({ url_avatar }) => {
  if (!url_avatar) {
    return <div className={styles.avatarCell}>N/A</div>;
  }
  return (
    <div className={styles.avatarCell}>
      <img src={url_avatar} alt="Avatar" className={styles.avatar} />
    </div>
  );
};

UserAvatar.propTypes = {
  url_avatar: PropTypes.string,
};

export default UserAvatar;
