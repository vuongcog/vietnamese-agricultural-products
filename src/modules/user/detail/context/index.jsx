import React from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PropTypes from '../../../../utils/prop-types';
import { useDispatch } from 'react-redux';
import { DETAIL_FETCH_DATA, DETAIL_FETCH_FEEDBACK } from '../constants/action';
export const ContextDetailProduct = createContext({});
const DetailProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const idProduct = searchParams.get('id');
  const dispatch = useDispatch();
  const endpoint = `/chitietsanpham/${slug}`;
  const endpointViewFeedback = `/danhgiasanpham/${idProduct}`;

  useEffect(() => {
    dispatch({ type: DETAIL_FETCH_DATA, payload: endpoint });
    dispatch({
      type: DETAIL_FETCH_FEEDBACK,
      payload: { endpoint: endpointViewFeedback },
    });
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
