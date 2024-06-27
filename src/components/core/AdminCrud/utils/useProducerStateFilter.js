import React from "react";
import { useSelector } from "react-redux";
import {
  getFilterPerPage,
  getFilterPagination,
  getFilterSearch,
  getFilterTotalPage,
  getFilterCurrentPage,
} from "../Store/selectorFilter";

const useProducerStateCrudFilter = () => {
  const search = useSelector(getFilterSearch);
  const pagination = useSelector(getFilterPagination);
  const perpage = useSelector(getFilterPerPage);
  const totalPage = useSelector(getFilterTotalPage);
  const currentPage = useSelector(getFilterCurrentPage);
  return {
    currentPage,
    totalPage,
    search,
    pagination,
    perpage,
  };
};

export default useProducerStateCrudFilter;
