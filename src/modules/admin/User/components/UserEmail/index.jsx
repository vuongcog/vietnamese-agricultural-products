import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';

const UserEmail = ({ email, role }) => {
  const mappingRole = {
    manager: 'text-red-600',
    admin: 'text-orange-400',
    staff: 'text-yellow-600',
    customer: 'text-green-600',
  };
  return (
    <Tooltip placement="top" label={email} aria-label="Full text">
      <div className={styles.container}>
        <EmailIcon className={classNames(styles.icon, mappingRole[role])} />
        <span className={styles.email}>{email}</span>
      </div>
    </Tooltip>
  );
};
UserEmail.propTypes = {
  email: PropTypes.string,
  role: PropTypes.string,
};

export default UserEmail;
