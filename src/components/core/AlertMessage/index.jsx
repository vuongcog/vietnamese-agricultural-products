import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PropTypes from "../../../utils/prop-types";

const MotionAlert = chakra(motion.div, {
  shouldForwardProp: (prop) => true,
});
function AlertMessage({
  status = "warning",
  title,
  message = "Không có trạng thái nào được kích hoạt",
  ...props
}) {
  return (
    <MotionAlert
      zIndex={"998"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Alert borderRadius={"6px"} {...props} status={status}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </MotionAlert>
  );
}
AlertMessage.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  props: PropTypes.object,
};
export default AlertMessage;
