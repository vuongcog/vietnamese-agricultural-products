import React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import styles from "./styles.module.scss";

const BannerTitle = ({ banner_title }) => {
  return (
    <div className={styles.container}>
      <CampaignIcon className={styles.icon} />
      <h2 className={styles.title}>{banner_title}</h2>
    </div>
  );
};

export default BannerTitle;
