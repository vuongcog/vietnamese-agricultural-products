import React, { useMemo } from 'react';
import FormComponent from '../components/FormInfoUser';
import Product from '../components/CartItem';
import styles from './styles.module.scss';
import ProductList from '../components/CartList';
import { formattedNumber } from '../../../../utils/format-number';
const CheckoutLayout = props => {
  const {
    products,
    handlerSetQuantity,
    handlerDeleteProduct,
    handlerSetValueRequest,
  } = props;

  const totalPrice = useMemo(
    () =>
      products?.reduce(
        (total, item) => total + item.unit_prices * item.quantity,
        0
      ),
    [products]
  );
  return (
    <div className={styles.layout}>
      <div className={styles.product}>
        <ProductList
          handlerDeleteProduct={handlerDeleteProduct}
          handlerSetQuantity={handlerSetQuantity}
          products={products}
        ></ProductList>
      </div>
      <div className={styles.checkout}>
        <FormComponent
          handlerSetValueRequest={handlerSetValueRequest}
          totalPrice={totalPrice}
        ></FormComponent>
      </div>
    </div>
  );
};

export default CheckoutLayout;
