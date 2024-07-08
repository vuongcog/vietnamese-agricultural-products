import React from 'react';
import ShoppingProvider from '../context';
import ProductFilter from '../components/Category';
import ListShoping from '../components/ListShopping';

const Shopping = () => (
  <ShoppingProvider>
    <div className="flex h-[10000px]">
      <ProductFilter />
      <ListShoping></ListShoping>
    </div>
  </ShoppingProvider>
);

export default Shopping;
