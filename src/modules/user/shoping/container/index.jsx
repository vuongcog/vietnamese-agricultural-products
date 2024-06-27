import React from "react";
import ListShoping from "../../../../components/user/ListShopping";
import LIST_PRODUCT from "../../../../constants/virtual-item";
import ShoppingProvider from "../context";
import ProductFilter from "../components/Category";

const Shopping = () => {
  return (
    <ShoppingProvider>
      <div className="flex  h-[10000px]">
        <ProductFilter />
        <ListShoping items={LIST_PRODUCT}></ListShoping>
      </div>
    </ShoppingProvider>
  );
};

export default Shopping;
