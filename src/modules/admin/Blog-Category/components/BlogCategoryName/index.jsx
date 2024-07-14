import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import CategoryIcon from '@mui/icons-material/Category';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';
const BlogCategoryName = ({ name, role }) => {
  const mappingRole = {
    manager: 'text-red-600',
    admin: 'text-orange-400',
    staff: 'text-yellow-600',
    customer: 'text-green-600',
  };
  return (
    <Tooltip placement="top" label={name} aria-label="Full text">
      <div className={styles.container}>
        <CategoryIcon
          className={classNames(styles.icon, mappingRole[role])}
        ></CategoryIcon>
        <span className={`${styles.label}`}>{name}</span>
      </div>
    </Tooltip>
  );
};
BlogCategoryName.propTypes = {
  role: PropTypes.string,
  slug: PropTypes.string,
};
export default BlogCategoryName;
