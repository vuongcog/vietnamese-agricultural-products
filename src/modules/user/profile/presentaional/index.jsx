import React from 'react';
import styles from './styles.module.scss';
import ProfileInforUser from '../components/ProfileInforUser';
import ProfilePurchaseUser from '../components/ProfilePurchaseUser';

// eslint-disable-next-line arrow-body-style
const ProfilePresentational = () => {
  return (
    <div className={styles.layout}>
      <div className={styles[`infor-user`]}>
        <ProfileInforUser></ProfileInforUser>
      </div>
      <div className={styles[`others-data`]}>
        <ProfilePurchaseUser></ProfilePurchaseUser>
      </div>
    </div>
  );
};

export default ProfilePresentational;
