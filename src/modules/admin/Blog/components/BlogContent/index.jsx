import React from 'react';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import classNames from 'classnames';
import DialogMessage from '../../../../../components/core/DialogMessage';
import { useDisclosure } from '@chakra-ui/react';

const BlogContent = ({ content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div
        onClick={onOpen}
        className={classNames(styles.container)}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <DialogMessage isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <div
          className={classNames('prose')}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </DialogMessage>
    </div>
  );
};
BlogContent.propTypes = {
  content: PropTypes.string,
};
export default BlogContent;
