import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { useDisclosure } from '@chakra-ui/react';
import DialogMessage from '../../../../../components/core/DialogMessage';

const UserName = ({ url_avatar }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!url_avatar) {
    return <div className={styles.avatarCell}>N/A</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.avatarCell}>
        <img
          src={url_avatar}
          onClick={onOpen}
          alt="Avatar"
          className={styles.avatar}
        />
        <DialogMessage isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <img
            className="w-full h-full object-cover"
            onClick={onOpen}
            src={url_avatar}
            alt="Avatar"
          />
        </DialogMessage>
      </div>
    </div>
  );
};

UserName.propTypes = {
  url_avatar: PropTypes.string,
};

export default UserName;
