import React from "react";
import { useSelector } from "react-redux";
import {
  getFetchingCrudList,
  getItemsCrudList,
  getRefreshCrudList,
} from "../Store/selector";

const useProducerStateCrud = () => {
  const items = useSelector(getItemsCrudList);
  const isFetching = useSelector(getFetchingCrudList);
  const refresh = useSelector(getRefreshCrudList);

  return {
    items,
    isFetching,
    refresh,
  };
};

export default useProducerStateCrud;
