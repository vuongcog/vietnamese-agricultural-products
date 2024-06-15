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
import { connect, useDispatch } from "react-redux";
import withReducer from "../../../../utils/injectReducer";
import filterProducerReducer from "../CrudSearch/reducers";
import { useCallback } from "react";
import { debounce } from "lodash";
import { useDebounce } from "../../../../utils/useDebounce";
import { reducerList } from "../reducer";

export const CrudContext = createContext({});

const ContextCrudProvider = ({ children, ...props }) => {
  let crudOptionsDefault = {
    name: "crud",
    translateName: "name",
    endpoint: "hello",
    endpointParams: {},
    $eager: "owner",
    $sort: { id: -1 },
    extraFilters: {},
    mode: {
      breadcrumb: true,
      list: true,
      search: true,
      create: true,
      paging: true,
    },
    pagingOptions: {
      mode: "replace",
    },
    renderAddButotn: undefined,
    breadcrums: [{ label: "Excamples" }],
    headingOptions: [],
    schema: [
      {
        name: "id",
        label: "ID",
        default: "N/A",
        className: "text-center",
        width: "5%",
      },
      { name: "title", label: "Example title", default: "N/A" },
      {
        name: "project.name",
        label: "Project",
        default: "N/A",
        width: "20%",
      },
      {
        name: "description",
        label: "Description",
        default: "N/A",
        width: "30%",
        limit: 100,
      },
      {
        name: "created_at",
        // date: process.env.DATE_FORMAT_MEDIUM,
        label: "Created Date",
        default: "N/A",
        width: "20%",
      },
      {
        name: "options",
        label: "",
        options: [
          { name: "edit", label: "Edit", callback: null },
          { name: "delete", label: "Remove", callback: null },
        ],
      },
    ],
    formSchema: [
      {
        name: "title",
        label: "Example title",
        placeholder: "Example name",
        type: "text",
      },
      {
        type: "select",
        name: "id_project",
        label: "Project",
        isMulti: false,
        endpoint: "/app/projects",
      },
      {
        name: "description",
        label: "Description",
        placeholder: "Description (optional)",
        type: "textarea",
        rows: 5,
      },
    ],
    type: "list",
    showTotalItemsOnTop: true,
  };

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
  const [isFetching, setFetching] = useState(true);
  const [items, setItems] = useState([]);
  const [defaultApiParams, setDefaultParams] = useState(apiParams);
  const [crudOptions, setCrudOptions] = useState(NewCrudOptions);
  const [errors, setErrors] = useState({});
  const debounceSearch = useDebounce(searchText, 100);
  const [pagination, setPagination] = useState(1);
  const getItem = (isLoading = true, modeParams) => {};

  const handleChangeSearchtext = (value) => {
    setSearchText(value.target.value);
  };

  const selectPerpage = (value) => {
    setPerpage(value);
  };
  const selectPagination = (value) => {
    setPagination(value);
    console.log(value);
  };

  const value = {
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
    setFetching,
    items: items,
    setItems,
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
    setFetching(true);
    crudOptions.endpointParams["search"] = debounceSearch;
    // crudOptions.endpointParams["num"] = perpage;
    crudOptions.endpointParams["page"] = pagination;
    console.log(crudOptions.endpointParams);

    const res = await new Http(crudOptions.endpoint).list(
      crudOptions.endpointParams
    );

    setFetching(false);
    return JSON.parse(res.data).data;
  };
  console.log(isFetching);
  useEffect(() => {
    const timer = setTimeout(() => {
      getItems(debounceSearch)
        .then((res) => {
          setItems(res);
        })
        .catch(() => {
          console.log("err");
        });
    }, [500]);
    return () => {
      clearTimeout(timer);
    };
  }, [debounceSearch, perpage, pagination]);

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
const injectReducer = withReducer({
  key: "filter",
  reducer: filterProducerReducer,
});
const injectReducer1 = withReducer({ key: "list", reducer: reducerList });

export default compose(
  connect(null, mapDispatchToProps),
  injectReducer,
  injectReducer1
)(ContextCrudProvider);

// useEffect(() => {
//   getItems();
// }, [searchText]);, const handleChangeSearchtext = (value) => {
//   setSearchText(value.target.value);
// };,const getItems = async () => {
//   crudOptions.endpointParams["q"] = searchText;
//   const config = {
//     headers: {
//       "X-API-KEY": "449a3aff26c2fbc9635100375b0e018fd3a4e194",
//       "Content-Type": "application/json",
//     },
//   };

//   await new Http(crudOptions.endpoint)
//     .post(crudOptions.endpointParams, config)
//     .then((res) => {
//       setItems(JSON.parse(res.data));
//     });
// };. đây là 3 hàm trên dùng để phục vụ trong việc fetchAPI, tôi muốn khi search, nó sẽ không fetchAPI liền mà mà đợi khi tôi ngừng serach khoảng 1s thì mới fetch
