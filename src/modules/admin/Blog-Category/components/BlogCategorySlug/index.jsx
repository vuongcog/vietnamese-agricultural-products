import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import LinkIcon from '@mui/icons-material/Link';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';
const BlogCategorySlug = ({ slug, role }) => {
  const mappingRole = {
    manager: 'text-red-600',
    admin: 'text-orange-400',
    staff: 'text-yellow-600',
    customer: 'text-green-600',
  };
  return (
    <Tooltip placement="top" label={slug} aria-label="Full text">
      <div className={styles.container}>
        <LinkIcon
          className={classNames(styles.icon, mappingRole[role])}
        ></LinkIcon>
        <span className={`${styles.label}`}>{slug}</span>
      </div>
    </Tooltip>
  );
};
BlogCategorySlug.propTypes = {
  role: PropTypes.string,
  slug: PropTypes.string,
};
export default BlogCategorySlug;
