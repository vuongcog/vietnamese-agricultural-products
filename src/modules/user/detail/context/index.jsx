import axios from "axios";
import React from "react";
import { createContext } from "react";

export const ContextDetailProduct = createContext({});

const DetailProvider = ({ children }) => {
  const getDetailProduct = async () => {
    await axios
      .get(`https://api.thedogapi.com/v1/images`)
      .then(() => {
        console.log("succsess");
      })
      .catch(() => {
        console.log("error");
      });
  };
  getDetailProduct().then(() => {
    console.log("hello");
  });
  return (
    <ContextDetailProduct.Provider value={{}}>
      {children}
    </ContextDetailProduct.Provider>
  );
};

export default DetailProvider;
// 519fc41a4c7e48418df7a12e3bd32fd2
