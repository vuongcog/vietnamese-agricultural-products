import React, { createContext, useState } from 'react';
import HttpAuth from '../../../../../utils/http/httpAuth';
import { toast } from 'react-toastify';
import { parseObjectJson } from '../../../../../utils/parse-json';
import PropTypes from '../../../../../utils/prop-types';

export const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  const login = async loginParams => {
    setLoading(true);
    const http = new HttpAuth();
    try {
      const res = await http.login(loginParams);
      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      const data = _.get(error.response, 'data');
      const parseDataErro = parseObjectJson(data);
      if (error.response && error.response.data && parseDataErro) {
        toast.error(parseDataErro.error);
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <FormContext.Provider value={{ setLoading, isLoading, login: login }}>
      {children}
    </FormContext.Provider>
  );
};
FormProvider.propTypes = {
  children: PropTypes.element,
};

export default FormProvider;
