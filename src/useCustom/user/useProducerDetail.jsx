import { useSelector } from "react-redux";
import {
  getDetailProduct,
  getFetchStatusDetailProductFailed,
  getFetchStatusDetailProductSuccess,
  getIsFetchingDetailProduct,
} from "../../modules/user/detail/store/selector/selectors";

const useProducerDetail = () => {
  const product = useSelector(getDetailProduct);
  const isFetchingDetail = useSelector(getIsFetchingDetailProduct);
  const isFetchStatusDetailSuccsess = useSelector(
    getFetchStatusDetailProductSuccess
  );
  const isFetchStatusDetailError = useSelector(
    getFetchStatusDetailProductFailed
  );
  return {
    isFetchingDetail,
    product,
    isFetchStatusDetailSuccsess,
    isFetchStatusDetailError,
  };
};

export default useProducerDetail;
