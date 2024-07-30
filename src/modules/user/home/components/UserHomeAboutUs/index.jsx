/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './styles.module.scss';
import { PICTURE } from '../../../../../constants/picture';

const UserHomeAboutUs = () => (
  <div className="px-10 py-10">
    <div className={styles.container}>
      <div className={styles.wrapperTitle}>
        <h1 className={`${styles.about} text-center`}>THÔNG TIN </h1>
        <p id="about" className={styles.paragraph}>
          Nguồn cung cấp uy tín các sản phẩm nông sản sấy khô cao cấp. Được
          thành lập với niềm đam mê về chất lượng và sự bền vững, chúng tôi
          chuyên cung cấp đa dạng các loại trái cây, rau củ, và thảo mộc sấy
          khô, vừa bổ dưỡng vừa thơm ngon. Sứ mệnh của chúng tôi là mang đến cho
          khách hàng những sản phẩm chất lượng cao, không chứa chất bảo quản
          nhân tạo, đảm bảo một lựa chọn lành mạnh và tự nhiên cho nhu cầu hàng
          ngày của bạn.
        </p>
      </div>
      <img src={PICTURE.about} alt="About Us" className={styles.image} />
    </div>
  </div>
);

export default UserHomeAboutUs;
