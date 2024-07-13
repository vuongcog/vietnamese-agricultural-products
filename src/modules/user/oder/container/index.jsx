import React, { useRef, useState } from 'react';
import CheckoutLayout from '../presentational';
import { useLocation } from 'react-router-dom';
import { SECRET_KEY } from '../../../../constants/secret-key';
import { decryptData } from '../../../../utils/parse-data-key';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ORDER_PRODUCT } from '../../../../actions/action-order';
import useProducerOrder from '../../../../useCustom/user/useProducerOrder';
import ProgressFullScreen from '../../../../components/core/ProgressFullScreen';

const CheckoutContainer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const state = queryParams.get('state');
  const [products, setProducts] = useState(decryptData(state, SECRET_KEY));
  const [valueRequest, setValueRequest] = useState();
  const { isOrdering } = useProducerOrder();

  const firstMount = useRef(true);
  const dispatch = useDispatch();
  const handlerSetQuantity = (number, product_id) => {
    setProducts(preProducts => {
      const newProducts = preProducts.map(item => {
        if (item.id_product === product_id) {
          return { ...item, quantity: number };
        }
        return item;
      });
      return newProducts;
    });
  };

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
    } else {
      dispatch({ type: ORDER_PRODUCT, payload: valueRequest });
    }
    () => {
      firstMount.current = true;
    };
  }, [valueRequest]);
  const handlerSetValueRequest = form => {
    const newProducts = products.map(item => ({
      quantity: item.quantity,
      id_product: item.id_product,
      unit_prices: item.unit_prices,
    }));
    setValueRequest({
      ...form,
      items: newProducts,
    });
  };

  const handlerDeleteProduct = productId => {
    setProducts(preProducts =>
      preProducts.filter(item => productId !== item.id_product)
    );
  };
  const props = {
    handlerSetValueRequest,
    products,
    handlerSetQuantity,
    handlerDeleteProduct,
  };
  return (
    <div>
      {isOrdering && <ProgressFullScreen></ProgressFullScreen>}
      <CheckoutLayout {...props}></CheckoutLayout>
    </div>
  );
};

export default CheckoutContainer;
