import React from 'react';
import styles from './CouponDetail.module.scss';
import ProductDes from '../../../Product/components/ProductDes';
import ProductInfo from '../../../Product/components/ProductInfo';
import { LocalOffer } from '@mui/icons-material';
import classNames from 'classnames';

const CouponDetail = ({ coupon }) => {
  console.log(coupon);
  return (
    <div className={classNames(styles.layout, 'italic')}>
      <div className={styles[`background-detail`]}></div>
      <div className={styles.profileContainer}>
        {/* <div className={styles.avatarWrapper}>
          <div className="text-[24px] font-bold">Mã khuyến mãi</div>
        </div> */}
        <h2 className={styles.name}>
          {' '}
          {parseFloat(coupon.discount_value).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}{' '}
          Off / {coupon.coupon_code}
        </h2>
        {/* <p className={styles.email}>{user.email}</p> */}
        {/* <span
          className={`${styles.badge} ${
            coupon.status === 'active' ? styles.active : styles.inactive
          }`}
        >
          {coupon.status}
        </span> */}
        <div className={styles.info}>
          <p>
            <strong>Discount value:</strong>{' '}
            {parseFloat(coupon.discount_value).toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>

          <p>
            <strong>Coupon quantity:</strong> {coupon.coupon_quantity}
          </p>

          <p>
            <strong>Start Date:</strong>{' '}
            {new Date(coupon.coupon_start_date).toLocaleString()}
          </p>
          <p>
            <strong>End Date:</strong>{' '}
            {new Date(coupon.coupon_end_date).toLocaleString()}
          </p>
          <p>
            <strong>Created at:</strong>{' '}
            {new Date(coupon.created_at).toLocaleString()}
          </p>
          <p>
            <strong>Updated at:</strong>{' '}
            {new Date(coupon.updated_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponDetail;
