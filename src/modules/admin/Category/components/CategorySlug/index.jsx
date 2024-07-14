import React from 'react';
import { FaTag } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Tooltip } from '@chakra-ui/react';

const CategorySlugComponent = ({ category_slug }) => (
  <Tooltip placement="top" label={category_slug} aria-label="Full text">
    <div className={styles.container}>
      <FaTag className={styles.icon} />
      <span className={styles.slugText}>{category_slug}</span>
    </div>
  </Tooltip>
);

CategorySlugComponent.propTypes = {
  category_slug: PropTypes.string.isRequired,
};

export default CategorySlugComponent;
