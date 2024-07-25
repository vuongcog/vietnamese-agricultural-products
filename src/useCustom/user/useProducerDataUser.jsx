import React from 'react';
import { useSelector } from 'react-redux';
import { getDataUser } from '../../selectors/user/selectors-data-user';

const useProducerDataUser = () => {
  const dataUser = useSelector(getDataUser);
  return { dataUser };
};

export default useProducerDataUser;
