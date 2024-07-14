import React from 'react';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import classNames from 'classnames';
import DialogMessage from '../../../../../components/core/DialogMessage';
import { useDisclosure } from '@chakra-ui/react';

const BannerDes = ({ banner_des }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div
        onClick={onOpen}
        className={classNames(styles.container)}
        dangerouslySetInnerHTML={{ __html: banner_des }}
      ></div>
      <DialogMessage isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <div
          className={classNames('prose')}
          dangerouslySetInnerHTML={{ __html: banner_des }}
        ></div>
      </DialogMessage>
    </div>
  );
};
BannerDes.propTypes = {
  banner_des: PropTypes.string,
};
export default BannerDes;
