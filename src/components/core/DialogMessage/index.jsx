import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import PropTypes from "../../../utils/prop-types";
import styles from "./styles.module.scss";
const DialogMessage = ({
  button,
  children,
  title,
  footer, // * cờ kiểm tra xem có nên render button hay không ?
  isOpen: propIsOpen,
  onOpen: propOnOpen,
  onClose: propOnClose,
}) => {
  // * khởi tạo state cho component
  const cancelRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // * hàm xử lý các action liên quan tới api
  const handleConfirm = () => {
    onClose();
  };

  // * nếu không nhận props thì sẽ lấy giá trị mặc định
  const finalIsOpen = propIsOpen ?? isOpen;
  const finalOnOpen = propOnOpen ?? onOpen;
  const finalOnClose = propOnClose ?? onClose;

  // * hàm render Footer
  const __renderFooter = () => {
    return (
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
  };

  return (
    <>
      <button className={styles.customButton} onClick={finalOnOpen}>
        {button}
      </button>
      <AlertDialog
        isOpen={finalIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={finalOnClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>
            <AlertDialogBody>{children}</AlertDialogBody>
            {footer && __renderFooter()}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
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
