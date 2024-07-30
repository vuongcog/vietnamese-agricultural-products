/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './styles.module.scss';
import { PICTURE } from '../../../../../constants/picture';

const UserHomeAdvertise = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      SẢN PHẨM <span className={styles.highlight}>SẠCH</span>
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.messages}>
        <div className={styles.title}>Nguồn cung nông sản sạch</div>
        <div className={styles.description}>
          Nơi cung cấp các sản phẩm nông sản sạch và an toàn hàng đầu. Chúng tôi
          cam kết mang đến cho khách hàng những sản phẩm nông sản sấy khô được
          sản xuất theo quy trình tự nhiên, không sử dụng chất bảo quản hay hóa
          chất độc hại. Với tiêu chí "sạch từ trang trại đến bàn ăn," chúng tôi
          luôn đặt chất lượng và an toàn sức khỏe của người tiêu dùng lên hàng
          đầu.
        </div>
      </div>
      <div className={styles.images}>
        <img
          className={styles.picture1}
          src={PICTURE.picture1}
          alt="Vegetable 1"
        />
      </div>
    </div>
  </div>
);

export default UserHomeAdvertise;
