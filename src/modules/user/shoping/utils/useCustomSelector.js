import { useSelector } from "react-redux";
import {
  getFechingStatus,
  getFetchingFailed,
  getFetchingSuccess,
  getItemsProductList,
} from "../store/selector/selector";

const useCustomSelector = () => {
  const items = useSelector(getItemsProductList);
  const isFetching = useSelector(getFechingStatus);
  const isFetchingSuccess = useSelector(getFetchingSuccess);
  const isFetchingFailed = useSelector(getFetchingFailed);

  return {
    items,
    isFetching,
    isFetchingSuccess,
    isFetchingFailed,
  };
};

export default useCustomSelector;
