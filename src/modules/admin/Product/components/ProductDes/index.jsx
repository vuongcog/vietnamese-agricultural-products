import React from 'react';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import { useDisclosure } from '@chakra-ui/react';
import classNames from 'classnames';
import DialogMessage from '../../../../../components/core/DialogMessage';
import { VisibilityOutlined } from '@mui/icons-material';
const ProductDes = ({ product_des }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <VisibilityOutlined
        cursor={'pointer'}
        onClick={onOpen}
      ></VisibilityOutlined>

      <DialogMessage
        width={1200}
        height={200}
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
