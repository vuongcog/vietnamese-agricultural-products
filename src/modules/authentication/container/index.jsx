import React, { Children, useContext } from "react";
import FormLogin from "../components/FormRegister";
import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import FormProvider, { FormContext } from "../components/FormLogin/FormContext";

const Authentication = ({ children }) => {
  return (
    <FormProvider>
      <div className={styles.layout}>
        {children}
        <Outlet></Outlet>
      </div>
    </FormProvider>
  );
};

export default Authentication;
