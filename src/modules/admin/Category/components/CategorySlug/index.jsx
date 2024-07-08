import React from 'react';
import { FaTag } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const CategorySlugComponent = ({ category_slug }) => (
  <div className={styles.container}>
    <FaTag className={styles.icon} />
    <span className={styles.slugText}>{category_slug}</span>
  </div>
);

CategorySlugComponent.propTypes = {
  category_slug: PropTypes.string.isRequired,
};

export default CategorySlugComponent;
