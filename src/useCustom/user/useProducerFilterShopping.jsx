import { useSelector } from "react-redux";
import {
  getCategoryFilter,
  getLimitFilter,
  getPaginationFilter,
  getPriceRangeFilter,
  getSearchFilter,
} from "../../modules/user/shoping/store/selector/selector";

const useProducerFilterShopping = () => {
  const search = useSelector(getSearchFilter);
  const pagination = useSelector(getPaginationFilter);
  const limit = useSelector(getLimitFilter);
  const priceRange = useSelector(getPriceRangeFilter);
  const category = useSelector(getCategoryFilter);
  return {
    category,
    priceRange,
    limit,
    pagination,
    search,
  };
};

export default useProducerFilterShopping;
