import React from "react";
import {
  getLimitFilter,
  getPaginationFilter,
  getSearchFilter,
} from "../store/selector/selector";
import { useSelector } from "react-redux";

const useProducerFilter = () => {
  const search = useSelector(getSearchFilter);
  const pagination = useSelector(getPaginationFilter);
  const limit = useSelector(getLimitFilter);
  return {
    search,
    pagination,
    limit,
  };
};

export default useProducerFilter;
