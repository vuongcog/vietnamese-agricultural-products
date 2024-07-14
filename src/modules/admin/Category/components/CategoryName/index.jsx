import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';
const CategoryName = ({ category_name }) => {
  if (!category_name) return <div className={styles.container}>N/A</div>;
  return (
    <Tooltip placement="top" label={category_name} aria-label="Full text">
      <div className={styles.container}>
        <i className={classNames('fa fa-tags', styles.icon)}></i>
        <span className={`${styles.label}`}>{category_name}</span>
      </div>
    </Tooltip>
  );
};
CategoryName.propTypes = {
  category_name: PropTypes.string,
};
export default CategoryName;
