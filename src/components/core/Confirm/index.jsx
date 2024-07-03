import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import PropTypes from "../../../utils/prop-types";
const Confirm = ({ children, button, title, callbackCancel }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  useEffect(() => {
    if (!button) {
      onOpen();
    }
  }, []);
  return (
    <>
      {button && (
        <button className={styles.customButton} onClick={onOpen}>
          {button}
        </button>
      )}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => {
          onClose();
          callbackCancel(null);
        }}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>
            <AlertDialogBody>
              {React.Children.map(children, (item) => {
                const newElement = React.cloneElement(item, {
                  onClose: onClose,
                  onOpen: onOpen,
                });
                return newElement;
              })}
            </AlertDialogBody>
            <AlertDialogFooter></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
Confirm.propTypes = {
  children: PropTypes.element,
  button: PropTypes.string,
  title: PropTypes.string,
  callbackCancel: PropTypes.func,
};
export default Confirm;
