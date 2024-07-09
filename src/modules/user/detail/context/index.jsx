import React from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from '../../../../utils/prop-types';
import { useDispatch } from 'react-redux';
import { DETAIL_FETCH_DATA } from '../constants/action';
export const ContextDetailProduct = createContext({});
const DetailProvider = ({ children }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const endpoint = `/chitietsanpham/${id}`;

  useEffect(() => {
    dispatch({ type: DETAIL_FETCH_DATA, payload: endpoint });
  }, []);
  return (
    <ContextDetailProduct.Provider value={{}}>
      {children}
    </ContextDetailProduct.Provider>
  );
};
DetailProvider.propTypes = {
  children: PropTypes.element,
};
export default DetailProvider;
