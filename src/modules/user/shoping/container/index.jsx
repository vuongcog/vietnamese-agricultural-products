import React from "react";
import UserShoppingCategory from "../components/Category";
import ListShoping from "../../../../components/user/ListShopping";
import LIST_PRODUCT from "../../../../constants/virtual-item";

const Shopping = () => {
  return (
    <div className="flex">
      <UserShoppingCategory></UserShoppingCategory>
      <ListShoping items={LIST_PRODUCT}></ListShoping>
    </div>
  );
};

export default Shopping;
