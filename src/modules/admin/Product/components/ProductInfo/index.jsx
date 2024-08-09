import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import DialogMessage from '../../../../../components/core/DialogMessage';
import { useDisclosure } from '@chakra-ui/react';
const ProductInfo = ({ product_info }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div
        onClick={onOpen}
        className={classNames(styles.container)}
        dangerouslySetInnerHTML={{ __html: product_info }}
      ></div>
      <DialogMessage
        width={1200}
        height={200}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <p
          className={classNames('prose')}
          dangerouslySetInnerHTML={{ __html: product_info }}
        ></p>
      </DialogMessage>
    </div>
  );
};
ProductInfo.propTypes = {
  link: PropTypes.string,
  product_info: PropTypes.string,
};
export default ProductInfo;
