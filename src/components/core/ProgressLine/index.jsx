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
          // Tăng giá trị ngẫu nhiên từ 1 đến 10 để mô phỏng tiến trình tải
          return Math.min(oldProgress + Math.random() * 10, 100);
        });
      }, 500); // Cập nhật mỗi nửa giây
    } else {
      setProgress(100); // Đặt giá trị thành 100 khi hoàn tất
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
