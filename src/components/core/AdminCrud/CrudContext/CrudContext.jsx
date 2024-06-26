import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import Http from "../../../../utils/http/http";
import { compose } from "redux";
import PropTypes from "prop-types";
import {
  addFilters,
  clearFilters,
  replaceFilters,
  startInitFilters,
} from "../CrudSearch/action";
import { connect, useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../../../utils/useDebounce";
import { FETCHED_DATA, FETCH_DATA, SET_ITEMS } from "../Store/constants";
import { crudOptionsDefault } from "./constants";
import {
  getErrorCrudList,
  getFetchingCrudList,
  getItemsCrudList,
  getRefreshCrudList,
} from "../Store/selector";
import { useDisclosure } from "@chakra-ui/react";

export const CrudContext = createContext({});
const ContextCrudProvider = ({ children, ...props }) => {
  const { classNameProps, mode, schemaForm } = props;
  let NewCrudOptions = {
    ...crudOptionsDefault,
    ...props,
    mode: {
      ...crudOptionsDefault.mode,
      ...mode,
    },
  };
  const [perpage, setPerpage] = useState(10);
  const apiParams = NewCrudOptions.endpointParams || {};
  const [searchText, setSearchText] = useState(NewCrudOptions.endpointParams.q);
  const [oldData, setOldData] = useState({});
  const [loaded, setLoaded] = useState(false);
  // const [isFetching, setFetching] = useState(true);
  const [defaultApiParams, setDefaultParams] = useState(apiParams);
  const [crudOptions, setCrudOptions] = useState(NewCrudOptions);
  const [errors, setErrors] = useState({});
  const debounceSearch = useDebounce(searchText, 100);
  const [pagination, setPagination] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector(getItemsCrudList);
  const isFetching = useSelector(getFetchingCrudList);
  const refresh = useSelector(getRefreshCrudList);
  // const errorMessage = useSelector(getErrorCrudList);
  const handleChangeSearchtext = (value) => {
    setSearchText(value.target.value);
  };

  const selectPerpage = (value) => {
    setPerpage(value);
  };
  const selectPagination = (value) => {
    setPagination(value);
  };

  const value = {
    sendEmail: true,
    schemaForm,
    dispatch,
    selectPagination,
    setPerpage,
    handleChangeSearchtext,
    searchText,
    setSearchText,
    oldData,
    setOldData,
    loaded,
    setLoaded,
    isFetching,
    items,
    defaultApiParams,
    setDefaultParams,
    crudOptions,
    setCrudOptions,
    errors,
    setErrors,
    classNameProps,
    mode,
    perpage,
    selectPerpage,
  };
  const getItems = async (debounceSearch) => {
    dispatch({ type: FETCH_DATA });
    crudOptions.endpointParams["search"] = debounceSearch;
    crudOptions.endpointParams["page"] = pagination;

    const res = await new Http(crudOptions.endpoint).list(
      crudOptions.endpointParams
    );
    dispatch({ type: FETCHED_DATA });

    return JSON.parse(res.data).data;
  };
  const isFirstRun = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      getItems(debounceSearch)
        .then((res) => {
          dispatch({ type: SET_ITEMS, payload: res });
        })
        .catch(() => {
          console.log("err");
          dispatch({ type: FETCHED_DATA });
        });
    }, [500]);

    return () => {
      isFirstRun.current = true;
      clearTimeout(timer);
    };
  }, [debounceSearch, perpage, pagination, refresh]);

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};

ContextCrudProvider.propTypes = {
  classNameProps: PropTypes.shape({}),
  mode: PropTypes.object,
  schemaForm: PropTypes.object,
};

const mapDispatchToProps = {
  addFilters,
  replaceFilters,
  clearFilters,
  startInitFilters,
};

ContextCrudProvider.propTypes = {
  children: PropTypes.element,
};
export default compose(connect(null, mapDispatchToProps))(ContextCrudProvider);
