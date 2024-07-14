import React from 'react';
import { useSelector } from 'react-redux';
import {
  getFilterPerPage,
  getFilterPagination,
  getFilterSearch,
  getFilterTotalPage,
  getFilterCurrentPage,
  getFilterID,
} from '../Store/selectorFilter';

const useProducerStateCrudFilter = () => {
  const search = useSelector(getFilterSearch);
  const pagination = useSelector(getFilterPagination);
  const perpage = useSelector(getFilterPerPage);
  const totalPage = useSelector(getFilterTotalPage);
  const currentPage = useSelector(getFilterCurrentPage);
  const id = useSelector(getFilterID);
  return {
    id,
    currentPage,
    totalPage,
    search,
    pagination,
    perpage,
  };
};

export default useProducerStateCrudFilter;
