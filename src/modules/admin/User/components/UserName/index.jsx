import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';
const UserName = ({ name, role }) => {
  const mappingRole = {
    manager: 'text-orange-600',
    admin: 'text-red-500',
    staff: 'text-teal-500',
    customer: 'text-green-600',
  };
  return (
    <Tooltip placement="top" label={name} aria-label="Full text">
      <div className={styles.container}>
        <SupportAgentIcon
          className={classNames(styles.icon, mappingRole[role])}
        ></SupportAgentIcon>
        <span className={classNames(styles.label)}>{name}</span>
      </div>
    </Tooltip>
  );
};
UserName.propTypes = {
  role: PropTypes.string,
  name: PropTypes.string,
};
export default UserName;
