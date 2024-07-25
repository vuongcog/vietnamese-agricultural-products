import { useSelector } from 'react-redux';
import {
  getCategoryFilter,
  getLastPage,
  getLimitFilter,
  getPaginationFilter,
  getPriceRangeFilter,
  getSearchFilter,
} from '../../modules/user/shoping/store/selector/selector';

const useProducerFilterShopping = () => {
  const search = useSelector(getSearchFilter);
  const pagination = useSelector(getPaginationFilter);
  const limit = useSelector(getLimitFilter);
  const priceRange = useSelector(getPriceRangeFilter);
  const category = useSelector(getCategoryFilter);
  const lastPage = useSelector(getLastPage);
  return {
    lastPage,
    category,
    priceRange,
    limit,
    pagination,
    search,
  };
};

export default useProducerFilterShopping;
