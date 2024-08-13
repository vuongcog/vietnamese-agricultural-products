import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
const CartHeader = () => (
  <div
    className={classNames(
      `flex gap-3 items-center px-32 py-4 `,
  styles.container
    )}
  >
    <i className="fa-solid fa-carrot text-[64px] text-orange-600"></i>
    <div className="text-orange-600 text-[36px] font-bold">Giỏ hàng</div>
  </div>
);

export default CartHeader;
