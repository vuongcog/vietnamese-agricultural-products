import React, { useState, useEffect } from 'react';
import { Progress, Box, Text } from '@chakra-ui/react';

function ProgressLine({ isFetching }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (isFetching) {
      setProgress(0);
      timer = setInterval(() => {
        setProgress(oldProgress => {
          if (oldProgress >= 100) {
            return 100;
          }
          return Math.min(oldProgress + Math.random() * 10, 100);
        });
      }, 500);
      setProgress(100);
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isFetching]);

  return (
    <Box>
      <Text mb={2}>Loading...</Text>
      <Progress value={progress} size="md" colorScheme="green" />
      <Text mt={2}>{progress.toFixed(0)}%</Text>
    </Box>
  );
}

export default ProgressLine;
