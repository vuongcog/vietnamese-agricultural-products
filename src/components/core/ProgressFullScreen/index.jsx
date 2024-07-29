import React, { useState, useEffect } from 'react';
import { Box, Progress, Text, useColorModeValue } from '@chakra-ui/react';
import PropTypes from '../../../utils/prop-types';

const ProgressFullScreen = ({ autoHide }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [autoHide]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress(prev => (prev >= 99 ? 99 : prev + Math.random() * 10));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      p={4}
      bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.800')}
      borderRadius="md"
      boxShadow="lg"
      zIndex="9999"
    >
      <Box textAlign="center">
        <Text
          mb={4}
          fontSize="2xl"
          fontWeight="bold"
          color={useColorModeValue('black', 'white')}
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
        >
          Loading...
        </Text>
        <Progress
          value={progress}
          size="sm"
          colorScheme="green"
          width="300px"
          borderRadius="md"
          sx={{
            '& > div:first-of-type': {
              backgroundColor:
                progress === 0 ? 'rgba(255, 0, 0, 0.3)' : 'green',
            },
          }}
        />
        <Text mt={4} color={useColorModeValue('black', 'white')}>
          {Math.floor(progress)}%
        </Text>
      </Box>
    </Box>
  );
};

ProgressFullScreen.propTypes = {
  autoHide: PropTypes.bool,
};

export default ProgressFullScreen;
