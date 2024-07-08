import { Box, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const SekeletonCrudList = () => (
  <Box padding="6" boxShadow="lg" bg="#292d3f">
    <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="20" />
  </Box>
);

export default SekeletonCrudList;
