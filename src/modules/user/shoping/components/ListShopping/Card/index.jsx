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
import { ToastContainer } from 'react-toastify';
import { ADD_CART } from '../../../../../../actions/action-cart';

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
      <ToastContainer></ToastContainer>
      <div
        ref={elementRef ? elementRef : null}
        {...props}
        onClick={() => {
          navigate(`/detail/${item.id}`);
        }}
        className={styles.container}
      >
        <div className={styles.wrapperImg}>
          <img src={cloneItem.product_image} alt={cloneItem.product_name} />
        </div>
        <p className={styles.title}>{cloneItem.product_name}</p>
        <span className={styles.price}>
          {formattedNumber(cloneItem?.unit_prices?.toLocaleString())}
        </span>
        <div className={styles.sold}>{cloneItem.sold} sold</div>
      </div>
      <button
        onClick={() => {
          dispatch({
            type: ADD_CART,
            payload: {
              endpoint: `http://localhost:8081/cart`,
              params: { productId: cloneItem.id, quantity: 1 },
            },
          });
        }}
        className={styles.cart}
      >
        {t(langsGlobal.addCart)}
        <ShoppingCartCheckout className={styles.cartIcon} />
      </button>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
