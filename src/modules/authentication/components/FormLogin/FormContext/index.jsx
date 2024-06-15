import React, { createContext, useEffect } from "react";
import HttpAuth from "../../../../../utils/http/httpAuth";
export const FormContext = createContext({});
const FormProvider = ({ children }) => {
  const login = async (loginParams) => {
    console.log("hello");
    const http = new HttpAuth();
    const res = await http.login(loginParams);
    return res.data;
  };

  return (
    <FormContext.Provider value={{ login: login }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
