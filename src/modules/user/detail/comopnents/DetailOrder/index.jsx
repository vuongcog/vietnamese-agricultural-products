import React, { useState } from 'react';
import QuantitySelector from '../../../../../components/core/NumberInput';
import PropTypes from '../../../../../utils/prop-types';
import { addCart } from '../../../../../utils/cart/add-cart';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styles from './styles.module.scss';
import useProducerDetail from '../../../../../useCustom/user/useProducerDetail';
import { useTranslation } from 'react-i18next';
import langsGlobal from '../../../../../langs';
import { useDispatch } from 'react-redux';
import { ADD_CART } from '../../../../../actions/action-cart';
const DetailOrder = () => {
  const [numbers, setNumbers] = useState(1);
  const { product } = useProducerDetail();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerSetNumber = number => {
    setNumbers(number);
  };
  return (
    <div className={styles.container}>
      <div className={styles.quantity}>
        <span>Số lượng</span>
        <QuantitySelector
          max={product.quantity}
          value={numbers}
          setValue={setNumbers}
          onSetNumber={handlerSetNumber}
        ></QuantitySelector>
      </div>
      <div className={styles.order}>
        {Cookies.get('accsessToken') && (
          <button
            onClick={() => {
              dispatch({
                type: ADD_CART,
                payload: {
                  endpoint: `/giohang/themgiohang`,
                  params: { id_prd: product.id, quantity: numbers },
                },
              });
              navigate('/cart');
            }}
          >
            {t(langsGlobal.byNow)}
          </button>
        )}
        <button
          onClick={() => {
            if (!Cookies.get('accsessToken')) {
              addCart(product, numbers);
              return;
            }
            dispatch({
              type: ADD_CART,
              payload: {
                endpoint: `/giohang/themgiohang`,
                params: { id_prd: product.id, quantity: 1 },
              },
            });
          }}
        >
          {t(langsGlobal.addCart)}
        </button>
      </div>
    </div>
  );
};
DetailOrder.propTypes = {
  quantity: PropTypes.number,
};
export default DetailOrder;
