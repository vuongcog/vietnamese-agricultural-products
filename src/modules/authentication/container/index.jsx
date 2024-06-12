import React, { Children } from "react";
import FormLogin from "../components/FormRegister";
import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";

const Authentication = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
      <Outlet></Outlet>
    </div>
  );
};

export default Authentication;
