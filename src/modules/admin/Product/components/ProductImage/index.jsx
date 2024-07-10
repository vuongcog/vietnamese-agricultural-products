import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { useDisclosure } from '@chakra-ui/react';
import DialogMessage from '../../../../../components/core/DialogMessage';

const ProductImage = ({ product_image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!product_image) {
    return <div className={styles.avatarCell}>N/A</div>;
  }
  return (
    <div className={styles.avatarCell}>
      <img
        src={product_image}
        onClick={onOpen}
        alt="Avatar"
        className={styles.avatar}
      />
      <DialogMessage isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <img
          className="w-full h-full object-cover"
          src={product_image}
          alt="Avatar"
        />
      </DialogMessage>
    </div>
  );
};

ProductImage.propTypes = {
  product_image: PropTypes.string,
};

export default ProductImage;
