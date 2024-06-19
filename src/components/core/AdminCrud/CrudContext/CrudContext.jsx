import { useEffect, useState } from "react";
import { createContext } from "react";
import Http from "../../../../utils/http/http";
import PropTypes from "prop-types";
import {
  addFilters,
  clearFilters,
  replaceFilters,
  startInitFilters,
} from "../CrudSearch/action";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import filterProducerReducer from "../CrudSearch/reducers";
import { useDebounce } from "../../../../utils/useDebounce";
import { reducerList } from "../Store/reducer";
import { FETCHED_DATA, FETCH_DATA, SET_ITEMS } from "../Store/constants";
import warcherTest from "../Store/saga";
import { runSaga } from "../../../../utils/saga/optionsSaga";
import { crudOptionsDefault } from "./constants";
import store from "../../../../configStore/configStore";
import getInjectors from "../../../../utils/reducerInjectors";
import {
  getFetchingCrudList,
  getItemsCrudList,
  getRefreshCrudList,
} from "../Store/selector";
import { AVATAR } from "../../../../constants/avatar";

export const CrudContext = createContext({});
const ContextCrudProvider = ({ children, ...props }) => {
  const { classNameProps, mode } = props;
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

  const handleChangeSearchtext = (value) => {
    setSearchText(value.target.value);
  };

  const selectPerpage = (value) => {
    setPerpage(value);
  };
  const selectPagination = (value) => {
    setPagination(value);
  };
  const createItems = async () => {
    const http = new Http("/user");
    await http.create(data);
  };
  console.log(refresh);

  const value = {
    createItems,
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
  const data = {
    name: "Ho Tung Son",
    email: "huynhnhatvuong7777@gmail.com",
    password: "huynhnhatvuong1",
    role: "manager",
    address: "123 Hoang Hoa Tham",
    phone_num: "0348079230",
    avatar: AVATAR.admin,
    status: "inactive",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getItems(debounceSearch)
        .then((res) => {
          dispatch({ type: SET_ITEMS, payload: res });
        })
        .catch(() => {
          console.log("err");
        });
    }, [500]);
    return () => {
      clearTimeout(timer);
    };
  }, [debounceSearch, perpage, pagination, refresh]);

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};

ContextCrudProvider.propTypes = {
  classNameProps: PropTypes.shape({}),
  mode: PropTypes.object,
};

const mapDispatchToProps = {
  addFilters,
  replaceFilters,
  clearFilters,
  startInitFilters,
};

const injectReducerFactory = getInjectors(store);
injectReducerFactory.injectReducer("crudList", reducerList);
injectReducerFactory.injectReducer("filter", filterProducerReducer);
runSaga(warcherTest, "sagaTest");

export default compose(connect(null, mapDispatchToProps))(ContextCrudProvider);
