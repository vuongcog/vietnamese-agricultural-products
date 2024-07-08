import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
const UserEmail = ({ email }) => (
  <div className={styles.container}>
    <EmailIcon className={styles.icon}></EmailIcon>
    <span className={`${styles.email}`}>{email}</span>
  </div>
);
UserEmail.propTypes = {
  email: PropTypes.string,
};
export default UserEmail;
