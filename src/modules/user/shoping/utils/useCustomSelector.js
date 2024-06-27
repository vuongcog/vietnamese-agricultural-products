import { useSelector } from "react-redux";
import {
  getFechingStatus,
  getFetchingFailed,
  getFetchingSuccess,
  getItemsProductList,
  getLimitFilter,
  getPaginationFilter,
  getSearchFilter,
} from "../store/selector/selector";

const useCustomSelector = () => {
  const items = useSelector(getItemsProductList);
  const isFetching = useSelector(getFechingStatus);
  const isFetchingSuccess = useSelector(getFetchingSuccess);
  const isFetchingFailed = useSelector(getFetchingFailed);
  const search = useSelector(getSearchFilter);
  const pagination = useSelector(getPaginationFilter);
  const limit = useSelector(getLimitFilter);

  return {
    items,
    isFetching,
    isFetchingSuccess,
    isFetchingFailed,
    limit,
    pagination,
    search,
  };
};

export default useCustomSelector;
