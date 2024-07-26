import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import DialogMessage from '../../../../../components/core/DialogMessage';
import { useDisclosure } from '@chakra-ui/react';
const OrderNotes = ({ order_notes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div
        onClick={onOpen}
        className={classNames(styles.container)}
        dangerouslySetInnerHTML={{ __html: order_notes }}
      ></div>
      <DialogMessage
        width={'800px'}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <p className={classNames('prose')}>{order_notes}</p>
      </DialogMessage>
    </div>
  );
};
OrderNotes.propTypes = {
  link: PropTypes.string,
  product_info: PropTypes.string,
};
export default OrderNotes;
