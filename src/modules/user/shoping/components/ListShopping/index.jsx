import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './styles.module.scss';
import { ShoppingContext } from '../../context';
import useCustomSelector from '../../utils/useCustomSelector';
import { useCallback } from 'react';
import useProducerCategory from '../../../../../useCustom/user/useProducerCategory';

const ListShoping = () => {
  const { loading } = useContext(ShoppingContext);
  const { items } = useCustomSelector();
  const { categories } = useProducerCategory();

  if (_.isEmpty(items) || _.isEmpty(categories)) return null;
  const __renderCard = item => <Card item={item} />;

  const __renderListProduct = items => (
    <div className={styles.listProductContainer}>
      {items.map(item => {
        const index = categories.filter(
          category => category.id === item.id_category
        );
        if (index.length === 0) return;
        if (item.status === 'active') {
          return __renderCard(item);
        }
      })}
    </div>
  );

  return (
    <div className={styles.content}>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        __renderListProduct(items)
      )}
    </div>
  );
};

ListShoping.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListShoping;
