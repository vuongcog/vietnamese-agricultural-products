import React from 'react';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import classNames from 'classnames';
import DialogMessage from '../../../../../components/core/DialogMessage';
import { useDisclosure } from '@chakra-ui/react';
import { VisibilityOutlined } from '@mui/icons-material';

const BlogContent = ({ content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <VisibilityOutlined
        cursor={'pointer'}
        onClick={onOpen}
      ></VisibilityOutlined>
      <DialogMessage
        width={800}
        height={200}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
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
