import React from "react";
import UserShoppingCategory from "../components/Category";
import ListShoping from "../../../../components/user/ListShopping";
import LIST_PRODUCT from "../../../../constants/virtual-item";
import ShoppingProvider, { ShoppingContext } from "../context";
import { useContext } from "react";

const Shopping = () => {
  return (
    <ShoppingProvider>
      <div className="flex bg-red-200 h-[10000px]">
        <UserShoppingCategory></UserShoppingCategory>
        <ListShoping items={LIST_PRODUCT}></ListShoping>
      </div>
    </ShoppingProvider>
  );
};

export default Shopping;
