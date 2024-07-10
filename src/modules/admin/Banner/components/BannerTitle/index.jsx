import React from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';

const BannerTitle = ({ banner_title }) => (
  <div className={styles.container}>
    <CampaignIcon className={styles.icon} />
    <span className={styles.title}>{banner_title}</span>
  </div>
);
BannerTitle.propTypes = {
  banner_title: PropTypes.string,
};

export default BannerTitle;
