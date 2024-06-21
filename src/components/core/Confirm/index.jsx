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
import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Confirm = ({ children, doneText, button, title, callbackCancel }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isConfirmed, setIsConfirmed } = useState(false);
  const cancelRef = useRef();
  const handleConfirm = ({ onConfirm }) => {
    setIsConfirmed(true);
    onConfirm();
    onClose();
  };

  useEffect(() => {
    if (!button) {
      onOpen();
    }
  }, []);
  return (
    <>
      {button && <Button onClick={onOpen}>{button}</Button>}
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
                });
                return newElement;
              })}
            </AlertDialogBody>
            <AlertDialogFooter>
              <AlertDialogFooter>
                <Button
                  ref={cancelRef}
                  onClick={() => {
                    onClose();
                    callbackCancel(null);
                  }}
                >
                  {doneText[0]}
                </Button>
                <Button colorScheme="red" onClick={handleConfirm} ml={3}>
                  {doneText[1]}
                </Button>
              </AlertDialogFooter>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Confirm;
