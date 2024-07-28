import React from 'react';
import { ChakraProvider, Box, Heading, SimpleGrid } from '@chakra-ui/react';
import useProducerDetail from '../../../../../useCustom/user/useProducerDetail';
import DetailFeedbackCart from '../DetailFeedbackCart';

function FeedbackList() {
  const { feedbacks } = useProducerDetail();
  if (_.isEmpty(feedbacks)) return null;
  return (
    <Box p={5}>
      <Heading mb={6}>Phản hồi từ người dùng</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {feedbacks.map(feedback => (
          <DetailFeedbackCart key={feedback.id} feedback={feedback} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default FeedbackList;
