import { useSelector } from 'react-redux';
import {
  getCarts,
  getDeleteCartSuccess,
  getRefreshCart,
} from '../../selectors/user/selectors-cart';

const useProducerCart = () => {
  const carts = useSelector(getCarts);
  const isDeleteCartSuccess = useSelector(getDeleteCartSuccess);
  const refesh = useSelector(getRefreshCart);
  return { carts, isDeleteCartSuccess, refesh };
};
export default useProducerCart;
