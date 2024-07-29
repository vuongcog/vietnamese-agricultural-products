import React from 'react';
import { useSelector } from 'react-redux';
import {
  getDataUser,
  getIsFetchingDataUser,
} from '../../selectors/user/selectors-data-user';

const useProducerDataUser = () => {
  const dataUser = useSelector(getDataUser);
  const isFetchingDataUser = useSelector(getIsFetchingDataUser);

  return { dataUser, isFetchingDataUser };
};

export default useProducerDataUser;
