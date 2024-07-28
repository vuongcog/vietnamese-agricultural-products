import React from 'react';
import {
  Box,
  Avatar,
  Text,
  Flex,
  HStack,
  Icon,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import styles from './styles.module.scss';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import DialogMessage from '../../../../../components/core/DialogMessage';

const DetailFeedbackCart = ({ feedback }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const renderStars = rating => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <HStack spacing={1}>
        {[...Array(fullStars)].map((_, i) => (
          <Icon key={i} as={FaStar} color="yellow.400" />
        ))}
        {halfStar && <Icon as={FaStarHalfAlt} color="yellow.400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Icon key={i} as={FaRegStar} color="yellow.400" />
        ))}
      </HStack>
    );
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <div className="flex items-center gap-2">
        <Avatar src={feedback.url_avatar} />
        <div className="font-bold">{feedback.name}</div>
      </div>
      <Text>
        <div className="flex ">
          <strong>Đánh giá:</strong>
          {renderStars(feedback.pivot.rate)}
        </div>
      </Text>
      <div className={styles.comment}>
        <Text onClick={onOpen} className="cursor-pointer">
          <strong>Bình luận:</strong> {feedback.pivot.comment}
        </Text>
        <DialogMessage isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <Text>
            <strong>Bình luận:</strong> {feedback.pivot.comment}
          </Text>
        </DialogMessage>
      </div>
      <Text fontSize="sm" color="gray.500">
        Ngày tạo: {new Date(feedback.pivot.created_at).toLocaleDateString()}
      </Text>
    </Box>
  );
};

export default DetailFeedbackCart;
