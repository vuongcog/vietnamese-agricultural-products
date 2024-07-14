import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import { Tooltip } from '@chakra-ui/react';

const ProductSlug = ({ product_slug }) => (
  <Tooltip placement="top" label={product_slug} aria-label="Full text">
    <div className={styles.productSlugContainer}>
      <FontAwesomeIcon icon={faTag} className={styles.icon} />
      <div className={styles.productSlug}>{product_slug}</div>
    </div>
  </Tooltip>
);
ProductSlug.propTypes = {
  product_slug: PropTypes.string,
};

export default ProductSlug;
