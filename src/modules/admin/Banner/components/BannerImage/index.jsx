import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { useDisclosure } from "@chakra-ui/react";
import DialogMessage from "../../../../../components/core/DialogMessage";

const BannerImage = ({ banner_image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!banner_image) {
    return <div className={styles.avatarCell}>N/A</div>;
  }
  return (
    <div className={styles.avatarCell}>
      <img
        src={banner_image}
        onClick={onOpen}
        alt="Avatar"
        className={styles.avatar}
      />
      <DialogMessage isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <img
          className="w-full h-full object-cover"
          onClick={onOpen}
          src={banner_image}
          alt="Avatar"
        />
      </DialogMessage>
    </div>
  );
};

BannerImage.propTypes = {
  banner_image: PropTypes.string,
};

export default BannerImage;
