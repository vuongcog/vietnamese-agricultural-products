import React from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import { Tooltip } from '@chakra-ui/react';

const BannerTitle = ({ banner_title }) => (
  <Tooltip placement="top" label={banner_title} aria-label="Full text">
    <div className={styles.container}>
      <CampaignIcon className={styles.icon} />
      <span className={styles.title}>{banner_title}</span>
    </div>
  </Tooltip>
);
BannerTitle.propTypes = {
  banner_title: PropTypes.string,
};

export default BannerTitle;
