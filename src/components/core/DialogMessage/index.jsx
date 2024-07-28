import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import PropTypes from '../../../utils/prop-types';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const DialogMessage = ({
  width,
  height,
  button,
  children,
  title,
  footer, // * cờ kiểm tra xem có nên render button hay không ?
  isOpen: propIsOpen,
  onOpen: propOnOpen,
  onClose: propOnClose,
  ...props
}) => {
  // * khởi tạo state cho component
  const cancelRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 111 tạo các utils
  const { t } = useTranslation();
  // * hàm xử lý các action liên quan tới api
  const handleConfirm = () => {
    onClose();
  };

  // * nếu không nhận props thì sẽ lấy giá trị mặc định
  const finalIsOpen = propIsOpen ?? isOpen;
  const finalOnOpen = propOnOpen ?? onOpen;
  const finalOnClose = propOnClose ?? onClose;

  // * hàm render Footer
  const __renderFooter = () => (
    <AlertDialogFooter>
      <Button
        ref={cancelRef}
        onClick={() => {
          finalOnClose();
        }}
      ></Button>
      <Button colorScheme="red" onClick={handleConfirm} ml={3}></Button>
    </AlertDialogFooter>
  );

  return (
    <div className="dialog-message-scope-container">
      {button && (
        <button
          type="button"
          className={styles.customButton}
          onClick={finalOnOpen}
        >
          {t(button)}
        </button>
      )}
      <AlertDialog
        isOpen={finalIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={finalOnClose}
        {...props}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            AlertDialogContent
            minWidth={width}
            minHeight={height}
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>
            <AlertDialogBody>{children}</AlertDialogBody>
            {footer && __renderFooter()}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};
DialogMessage.propTypes = {
  title: PropTypes.string,
  button: PropTypes.string,
  children: PropTypes.element,
  message: PropTypes.string,
  footer: PropTypes.bool, // * cờ kiểm tra xem có nên render button hay không ?
  isOpen: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

export default DialogMessage;
