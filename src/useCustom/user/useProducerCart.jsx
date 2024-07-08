import { useSelector } from 'react-redux';
import { getCarts } from '../../selectors/user/selectors-cart';

const useProducerCart = () => {
  const carts = useSelector(getCarts);

  return { carts };
};
export default useProducerCart;
