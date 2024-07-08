import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getCarts } from "../../modules/user/detail/store/selector/selectors";

const useProducerCart = () => {
  const carts = useSelector(getCarts);

  return { carts };
};
export default useProducerCart;
