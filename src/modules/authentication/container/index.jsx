import React, { Children } from "react";
import FormLogin from "../components/FormRegister";
import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import FormProvider from "../components/FormLogin/FormContext";

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
