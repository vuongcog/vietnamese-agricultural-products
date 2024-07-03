import React from "react";
import {
  getCategoryFilter,
  getLimitFilter,
  getPaginationFilter,
  getPriceRangeFilter,
  getSearchFilter,
} from "../store/selector/selector";
import { useSelector } from "react-redux";

const useProducerFilter = () => {
  const search = useSelector(getSearchFilter);
  const pagination = useSelector(getPaginationFilter);
  const limit = useSelector(getLimitFilter);
  const category = useSelector(getCategoryFilter);
  const priceRange = useSelector(getPriceRangeFilter);
  return {
    priceRange,
    category,
    search,
    pagination,
    limit,
  };
};

export default useProducerFilter;
