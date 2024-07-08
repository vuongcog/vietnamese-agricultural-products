/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './styles.module.scss';
import { PICTURE } from '../../../../../constants/picture';

const UserHomeAdvertise = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      FRESH <span className={styles.highlight}>VEGETABLE</span>
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.messages}>
        <div className={styles.title}>Best Vegetables Shop</div>
        <div className={styles.description}>
          Best Vegetables Shop It is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using "Content here,
          content here", making it look like readable English. Many desktop
          publishing packages andIt is a long established fact that a reader
          will be distracted
        </div>
      </div>
      <div className={styles.images}>
        <img
          className={styles.picture1}
          src={PICTURE.picture1}
          alt="Vegetable 1"
        />
        <img
          className={styles.picture2}
          src={PICTURE.picture2}
          alt="Vegetable 2"
        />
      </div>
    </div>
  </div>
);

export default UserHomeAdvertise;
