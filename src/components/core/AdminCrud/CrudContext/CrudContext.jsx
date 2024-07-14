import React, { useEffect, useRef, useState } from 'react';
import { createContext } from 'react';
import Http from '../../../../utils/http/http';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { useDebounce } from '../../../../utils/use-debounce';
import {
  FETCHED_DATA,
  FETCH_DATA,
  FETCH_DATA_WITH_ID,
  SET_ITEMS,
} from '../Store/constants';
import { crudOptionsDefault } from '../constants/curd-options-default';

import useProducerStateCrud from '../utils/useProducerState';
import useProducerStateCrudFilter from '../utils/useProducerStateFilter';
import {
  CRUD_SET_ID,
  CRUD_SET_PAGANATION,
  CRUD_SET_PER_PAGE,
  CRUD_SET_SEARCH,
  CRUD_SET_TOTAL_PAGE,
} from '../constants/actionFilter';
import { toast } from 'react-toastify';

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
  const dispatch = useDispatch();
  const apiParams = crudOptions.endpointParams || {};
  const [defaultApiParams, setDefaultParams] = useState(apiParams);
  const firstMount = useRef(true);
  // 222 get state of redux
  const { items, isFetching, refresh } = useProducerStateCrud();
  const { search, pagination, perpage, id } = useProducerStateCrudFilter();
  const debounceSearch = useDebounce(search, 400);
  const debounceID = useDebounce(id, 400);
  // 111 define handler set filter
  const handleChangeSearchtext = value => {
    dispatch({ type: CRUD_SET_SEARCH, payload: value.target.value });
  };
  const handleChangeSearchId = value => {
    dispatch({ type: CRUD_SET_ID, payload: value.target.value });
  };

  const selectPerpage = value => {
    dispatch({ type: CRUD_SET_PER_PAGE, payload: value });
  };
  const selectPagination = value => {
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
    handleChangeSearchId,
  };
  const getItems = async debounceSearch => {
    dispatch({ type: FETCH_DATA });
    crudOptions.endpointParams['search'] = debounceSearch;
    crudOptions.endpointParams['page'] = pagination;
    crudOptions.endpointParams['perpage'] = perpage;
    const res = await new Http(crudOptions.endpoint).list(
      crudOptions.endpointParams
    );
    return JSON.parse(res.data);
  };
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
    } else {
      if (debounceID) {
        dispatch({
          type: FETCH_DATA_WITH_ID,
          payload: `${crudOptions.endpoint}/${debounceID}`,
        });
      }
      if (!debounceID) {
        getItems(debounceSearch)
          .then(res => {
            dispatch({ type: SET_ITEMS, payload: res.data });
            dispatch({ type: CRUD_SET_TOTAL_PAGE, payload: res.total_pages });
          })
          .catch(() => {
            toast.error(
              'Không tồn tại dữ liệu hoặc bạn không có quyền truy cập vào dữ liệu này'
            );
          })
          .finally(() => {
            dispatch({ type: FETCHED_DATA });
          });
      }
    }
    () => {
      firstMount.current = true;
    };
  }, [debounceID]);

  useEffect(() => {
    getItems(debounceSearch)
      .then(res => {
        dispatch({ type: SET_ITEMS, payload: res.data });
        dispatch({ type: CRUD_SET_TOTAL_PAGE, payload: res.total_pages });
      })
      .catch(() => {
        toast.error(
          'Không tồn tại dữ liệu hoặc bạn không có quyền truy cập vào dữ liệu này'
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
