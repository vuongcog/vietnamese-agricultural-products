import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';

const UserEmail = ({ email, role }) => {
  const mappingRole = {
    admin: '#0B0C10',
    manager: '#1F2833',
    staff: '#2E3440',
    customer: '#3B4252',
  };
  return (
    <Tooltip placement="top" label={email} aria-label="Full text">
      <div className={styles.container}>
        <EmailIcon
          className={classNames(styles.icon, `text-[${mappingRole[role]}]`)}
        />
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
