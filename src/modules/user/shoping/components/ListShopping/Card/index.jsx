import React, { useContext } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartCheckout } from '@mui/icons-material';
import _ from 'lodash';
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonCart from '../SkeletonCart';
import { ShoppingContext } from '../../../context';
import useCustomSelector from '../../../utils/useCustomSelector';
import { useTranslation } from 'react-i18next';
import langsGlobal from '../../../../../../langs';
import { useDispatch } from 'react-redux';
import { formattedNumber } from '../../../../../../utils/format-number';
import { ADD_CART } from '../../../../../../actions/action-cart';
import { toast } from 'react-toastify';
import { addCart } from '../../../../../../utils/cart/add-cart';

const Card = ({ item, ...props }) => {
  const navigate = useNavigate();
  const cloneItem = _.cloneDeep(item);
  const { elementRef } = useContext(ShoppingContext);
  const { isFetching } = useCustomSelector();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  if (isFetching) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <SkeletonCart></SkeletonCart>
        </div>
      </div>
    );
  }
  if (isFetching) {
    return <SkeletonCart></SkeletonCart>;
  }
  return (
    <div className={styles.wrapper}>
      <div
        ref={elementRef ? elementRef : null}
        {...props}
        onClick={() => {
          navigate(`/detail?slug=${item.product_slug}&id=${item.id}`);
        }}
        className={styles.container}
      >
        <div className={styles.wrapperImg}>
          <img src={cloneItem.product_image} alt={cloneItem.product_name} />
        </div>
        <div className="flex">
          <h5 className={styles.title}>{cloneItem.product_name}</h5>
          <span className={styles.price}>
            {/* {'/'} */}
            {cloneItem &&
              parseFloat(cloneItem?.unit_prices).toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND',
              })}
          </span>
        </div>
      </div>
      <div className={styles[`wrapper-bottom`]}>
        <button
          onClick={() => {
            if (!Cookies.get('accsessToken')) {
              addCart(item, 1);
              return;
            }
            if (cloneItem.quantity <= 0) {
              toast.warning('Sản phẩm này đã hết hàng');
              return;
            }
            dispatch({
              type: ADD_CART,
              payload: {
                endpoint: `/giohang/themgiohang`,
                params: { id_prd: cloneItem.id, quantity: 1 },
              },
            });
          }}
          className={styles.cart}
        >
          {t(langsGlobal.addCart)}
          <ShoppingCartCheckout className={styles.cartIcon} />
        </button>
        <div className={styles.quantity}>
          <h6 className="text-slate-600">
            {cloneItem.quantity <= 0 ? 'Hết hàng' : cloneItem.quantity}
          </h6>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
