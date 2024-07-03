import React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import styles from "./styles.module.scss";
import PropTypes from "../../../../../utils/prop-types";

const BannerTitle = ({ banner_title }) => {
  return (
    <div className={styles.container}>
      <CampaignIcon className={styles.icon} />
      <h2 className={styles.title}>{banner_title}</h2>
    </div>
  );
};
BannerTitle.propTypes = {
  banner_title: PropTypes.string,
};

export default BannerTitle;
