import React from 'react';
import styles from './UserProfile.module.scss';

const UserProfile = ({ user }) => {
  return (
    <div className={styles.layout}>
      <div className={styles[`background-detail`]}></div>
      <div className={styles.profileContainer}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={user.url_avatar}
            alt={`Avatar of ${user.name}`}
          />
        </div>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.email}>{user.email}</p>
        <span
          className={`${styles.badge} ${
            user.status === 'active' ? styles.active : styles.inactive
          }`}
        >
          {user.status}
        </span>
        <div className={styles.info}>
          <p>
            <strong>Email Verified:</strong>{' '}
            {user.email_verified_at ? 'Verified' : 'Not Verified'}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone_num}
          </p>
          <p>
            <strong>Address:</strong>{' '}
            {user.address ? user.address : 'No Address Provided'}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Created at:</strong>{' '}
            {new Date(user.created_at).toLocaleString()}
          </p>
          <p>
            <strong>Updated at:</strong>{' '}
            {new Date(user.updated_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
