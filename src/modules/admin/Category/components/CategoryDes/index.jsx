import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import { Tooltip } from '@chakra-ui/react';

const CategoryDes = ({ category_des }) => (
  <Tooltip placement="top" label={category_des} aria-label="Full text">
    <div className={styles.container}>
      <DescriptionIcon className={styles.icon} />
      <span className={styles.description}>{category_des || 'N/A'}</span>
    </div>
  </Tooltip>
);

CategoryDes.propTypes = {
  category_des: PropTypes.string,
};

export default CategoryDes;
