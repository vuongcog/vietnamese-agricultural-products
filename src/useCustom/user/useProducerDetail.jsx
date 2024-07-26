import { useSelector } from 'react-redux';
import {
  getDetailProduct,
  getFeedbacks,
  getFetchStatusDetailProductFailed,
  getFetchStatusDetailProductSuccess,
  getIsFetchingDetailProduct,
} from '../../modules/user/detail/store/selector/selectors';

const useProducerDetail = () => {
  const feedbacks = useSelector(getFeedbacks);
  const product = useSelector(getDetailProduct);
  const isFetchingDetail = useSelector(getIsFetchingDetailProduct);
  const isFetchStatusDetailSuccsess = useSelector(
    getFetchStatusDetailProductSuccess
  );
  const isFetchStatusDetailError = useSelector(
    getFetchStatusDetailProductFailed
  );
  return {
    feedbacks,
    isFetchingDetail,
    product,
    isFetchStatusDetailSuccsess,
    isFetchStatusDetailError,
  };
};

export default useProducerDetail;
