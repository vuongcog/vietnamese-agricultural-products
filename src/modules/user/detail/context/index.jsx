import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import HttpUserClient from "../../../../utils/http/httpUserClient";
export const ContextDetailProduct = createContext({});

const DetailProvider = ({ children }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isFetching, setFetching] = useState(false);
  const getItem = async () => {
    setFetching(true);
    const params = { id };
    const http = new HttpUserClient();
    const res = await http.getItem(params);
    setFetching(false);
    return JSON.parse(res.data);
  };
  useEffect(() => {
    getItem()
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ContextDetailProduct.Provider value={{ item }}>
      {isFetching && "...loading"}
      {children}
    </ContextDetailProduct.Provider>
  );
};

export default DetailProvider;
