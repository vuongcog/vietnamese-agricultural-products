import React from "react";

const CartHeader = () => {
  return (
    <div className="flex gap-3 items-center px-32 py-4 bg-white shadow-md border-b border-gray-200">
      <i className="fa-solid fa-carrot text-[64px] text-orange-600"></i>
      <div className="text-orange-600 text-[36px] font-bold">Giỏ hàng</div>
    </div>
  );
};

export default CartHeader;
