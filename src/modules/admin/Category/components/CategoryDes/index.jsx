import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';

const CategoryDes = ({ category_des }) => (
  <div className={styles.container}>
    <DescriptionIcon className={styles.icon} />
    <span className={styles.description}>{category_des || 'N/A'}</span>
  </div>
);

CategoryDes.propTypes = {
  category_des: PropTypes.string,
};

export default CategoryDes;
