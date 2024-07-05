import React, { useEffect, useState } from "react";
import { createContext } from "react";
import Http from "../../../../utils/http/http";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { useDebounce } from "../../../../utils/use-debounce";
import { FETCHED_DATA, FETCH_DATA, SET_ITEMS } from "../Store/constants";
import { crudOptionsDefault } from "../constants/curd-options-default";

import useProducerStateCrud from "../utils/useProducerState";
import useProducerStateCrudFilter from "../utils/useProducerStateFilter";
import {
  CRUD_SET_PAGANATION,
  CRUD_SET_PER_PAGE,
  CRUD_SET_SEARCH,
  CRUD_SET_TOTAL_PAGE,
} from "../constants/actionFilter";
import { toast } from "react-toastify";

export const CrudContext = createContext({});
const ContextCrudProvider = ({ children, ...props }) => {
  const { classNameProps, mode, schemaForm } = props;

  let crudOptions = {
    ...crudOptionsDefault,
    ...props,
    mode: {
      ...crudOptionsDefault.mode,
      ...mode,
    },
  };
  const apiParams = crudOptions.endpointParams || {};
  const [defaultApiParams, setDefaultParams] = useState(apiParams);

  const dispatch = useDispatch();

  // 222 get state of redux
  const { items, isFetching, refresh } = useProducerStateCrud();
  const { search, pagination, perpage } = useProducerStateCrudFilter();
  const debounceSearch = useDebounce(search, 100);

  // 111 define handler set filter
  const handleChangeSearchtext = (value) => {
    dispatch({ type: CRUD_SET_SEARCH, payload: value.target.value });
  };
  const selectPerpage = (value) => {
    dispatch({ type: CRUD_SET_PER_PAGE, payload: value });
  };
  const selectPagination = (value) => {
    dispatch({ type: CRUD_SET_PAGANATION, payload: value });
  };
  const value = {
    sendEmail: true,
    schemaForm,
    dispatch,
    selectPagination,
    handleChangeSearchtext,
    isFetching,
    items,
    defaultApiParams,
    setDefaultParams,
    crudOptions,
    classNameProps,
    mode,
    perpage,
    selectPerpage,
  };
  const getItems = async (debounceSearch) => {
    dispatch({ type: FETCH_DATA });
    crudOptions.endpointParams["search"] = debounceSearch;
    crudOptions.endpointParams["page"] = pagination;
    crudOptions.endpointParams["per_page"] = perpage;
    const res = await new Http(crudOptions.endpoint).list(
      crudOptions.endpointParams
    );
    return JSON.parse(res.data);
  };
  useEffect(() => {
    getItems(debounceSearch)
      .then((res) => {
        dispatch({ type: SET_ITEMS, payload: res.data });
        dispatch({ type: CRUD_SET_TOTAL_PAGE, payload: res.total_pages });
      })
      .catch(() => {
        toast.error(
          "Không tồn tại dữ liệu hoặc bạn không có quyền truy cập vào dữ liệu này"
        );
      })
      .finally(() => {
        dispatch({ type: FETCHED_DATA });
      });
  }, [debounceSearch, perpage, pagination, refresh]);

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};

ContextCrudProvider.propTypes = {
  classNameProps: PropTypes.shape({}),
  mode: PropTypes.object,
  schemaForm: PropTypes.object,
};

ContextCrudProvider.propTypes = {
  children: PropTypes.element,
};
export default ContextCrudProvider;
