import React, { createContext, useEffect, useState } from "react";
import HttpAuth from "../../../../../utils/http/httpAuth";
export const FormContext = createContext({});
const FormProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const login = async (loginParams) => {
    setLoading(true);
    const http = new HttpAuth();
    const res = await http.login(loginParams).catch(() => {
      setLoading(false);
    });
    return res.data;
  };
  return (
    <FormContext.Provider value={{ setLoading, isLoading, login: login }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
