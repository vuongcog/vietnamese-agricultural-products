import React from 'react';
import ShoppingProvider from '../context';
import ProductFilter from '../components/Category';
import ListShoping from '../components/ListShopping';
import useProducerFilterShopping from '../../../../useCustom/user/useProducerFilterShopping';

const Shopping = () => {
  const { pagination } = useProducerFilterShopping();
  const height = (pagination + 1) * 750;
  return (
    <ShoppingProvider>
      <div style={{ height: `${height}px` }} className={`flex`}>
        <ProductFilter />
        <ListShoping></ListShoping>
      </div>
    </ShoppingProvider>
  );
};

export default Shopping;
