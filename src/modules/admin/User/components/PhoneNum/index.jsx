import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';

const UserPhone = ({ phone_num }) => {
  if (_.isEmpty(phone_num)) return 'N/A';
  return (
    <div className={styles.container}>
      <PhoneIcon className={styles.icon} />
      <span className={styles.phone}>{phone_num}</span>
    </div>
  );
};
UserPhone.propTypes = {
  phone_num: PropTypes.string,
};

export default UserPhone;
