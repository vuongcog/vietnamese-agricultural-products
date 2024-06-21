import React from "react";
import UserShoppingCategory from "../components/Category";
import ListShoping from "../../../../components/user/ListShopping";
import LIST_PRODUCT from "../../../../constants/virtual-item";
import ShoppingProvider from "../context";

const Shopping = () => {
  return (
    <ShoppingProvider>
      <div className="flex  h-[10000px]">
        <UserShoppingCategory></UserShoppingCategory>
        <ListShoping items={LIST_PRODUCT}></ListShoping>
      </div>
    </ShoppingProvider>
  );
};

export default Shopping;
