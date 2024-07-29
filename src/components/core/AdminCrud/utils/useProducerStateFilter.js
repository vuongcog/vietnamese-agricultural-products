import React from 'react';
import { useSelector } from 'react-redux';
import {
  getFilterPerPage,
  getFilterPagination,
  getFilterSearch,
  getFilterTotalPage,
  getFilterCurrentPage,
  getFilterID,
  getFilterSortBy,
  getFilterSortDirection,
} from '../Store/selectorFilter';

const useProducerStateCrudFilter = () => {
  const search = useSelector(getFilterSearch);
  const pagination = useSelector(getFilterPagination);
  const perpage = useSelector(getFilterPerPage);
  const totalPage = useSelector(getFilterTotalPage);
  const currentPage = useSelector(getFilterCurrentPage);
  const sort_by = useSelector(getFilterSortBy);
  const sort_direction = useSelector(getFilterSortDirection);
  const id = useSelector(getFilterID);
  return {
    sort_by,
    sort_direction,
    id,
    currentPage,
    totalPage,
    search,
    pagination,
    perpage,
  };
};

export default useProducerStateCrudFilter;
