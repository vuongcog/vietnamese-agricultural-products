import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { MdMonetizationOn } from "react-icons/md"; // Import icon from react-icons library

import styles from "./styles.module.scss"; // Ensure correct path to CSS Modules file

const CouponDiscount = ({ discount_value }) => {
  const formattedValue = new Intl.NumberFormat("en-US").format(discount_value);

  return (
    <Box className={styles.couponContainer}>
      <Icon as={MdMonetizationOn} className={styles.icon} />
      <span className={styles.value}>{formattedValue}</span>
    </Box>
  );
};

export default CouponDiscount;
