import React from 'react';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import { useDisclosure } from '@chakra-ui/react';
import classNames from 'classnames';
import DialogMessage from '../../../../../components/core/DialogMessage';
const ProductDes = ({ product_des }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div
        onClick={onOpen}
        className={classNames(styles.container)}
        dangerouslySetInnerHTML={{ __html: product_des }}
      ></div>
      <DialogMessage
        width={'800px'}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <div
          className={classNames('prose')}
          dangerouslySetInnerHTML={{ __html: product_des }}
        ></div>
      </DialogMessage>
    </div>
  );
};
ProductDes.propTypes = {
  product_des: PropTypes.string,
};
export default ProductDes;
