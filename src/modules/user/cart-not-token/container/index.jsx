import React, { useState } from 'react';
import { createContext } from 'react';
import CartModule from '../presentational';
import { SECRET_KEY } from '../../../../constants/secret-key';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { encrypData } from '../../../../utils/parse-data-key';
import { getCart } from '../../../../utils/cart/get-cart';
import { deleteCartItem } from '../../../../utils/cart/delete-cart';
import { updateCartItemQuantity } from '../../../../utils/cart/update-cart';
export const CartContext = createContext({});

const CartNotToken = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const carts = getCart();
  const navigate = useNavigate();
  // 111 handler giành cho list cart
  const handleChange = selectedValues => {
    setSelectedItems(selectedValues);
  };
  const handleSelect = id => {
    if (!selectedItems.includes(id)) {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDeselect = id => {
    setSelectedItems(selectedItems.filter(item => item !== id));
  };

  const handleSelectAll = e => {
    if (e.target.checked) {
      const allItemIds = carts.map(item => item.id_product);
      setSelectedItems(allItemIds);
    } else {
      setSelectedItems([]);
    }
  };
  const findCommonItems = () => {
    const data = carts.filter(item => selectedItems.includes(item.id_product));
    if (!_.isEmpty(data)) {
      const encodedData = encrypData(data, SECRET_KEY);

      navigate(`/checkout?state=${encodedData}`);
      return;
    }
    toast.warning('Bạn chư chọn sản phẩm nào');
  };

  // 222 handler giành cho https cart

  const handlerDeleteCart = idProduct => {
    deleteCartItem(idProduct);
    setRefresh(!refresh);
  };
  const handlerUpdateCart = (id_product, quantity) => {
    updateCartItemQuantity(id_product, quantity);
    setRefresh(!refresh);
  };

  return (
    <CartContext.Provider
      value={{
        setRefresh,
        carts,
        handlerDeleteCart,
        handlerUpdateCart,
        handleChange,
        handleDeselect,
        handleSelect,
        handleSelectAll,
        selectedItems,
        setSelectedItems,
        findCommonItems,
      }}
    >
      <CartModule></CartModule>
    </CartContext.Provider>
  );
};
export default CartNotToken;
