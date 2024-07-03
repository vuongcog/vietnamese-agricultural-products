import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import formatDateTime from "../../../utils/formateDateTime";

const CreatedAtComponent = ({ created_at }) => {
  return (
    <div className={styles.container}>
      <FaCalendarAlt className={styles.icon} />
      <span className={styles.dateText}>{formatDateTime(created_at)}</span>
    </div>
  );
};

CreatedAtComponent.propTypes = {
  created_at: PropTypes.string.isRequired,
};

export default CreatedAtComponent;
