import React from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import HttpUserClient from '../../../../../utils/http/httpUserClient';
import { toast } from 'react-toastify';

const FormCreateFeedback = ({ id_user, id_product }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      id_user,
      id_product,
      rate: formData.get('rate'),
      comment: formData.get('comment'),
    };
    try {
      const http = new HttpUserClient('/danhgiasanpham/themdanhgia');
      const res = http.createFeedback(data);
      toast.success('Thành công');
    } catch (error) {
      toast.error('Thất bại');
    }
  };

  return (
    <Box maxWidth="500px" mx="auto" mt="5">
      <form onSubmit={handleSubmit}>
        <FormControl id="rate" isRequired mt={4}>
          <FormLabel>Đánh giá</FormLabel>
          <NumberInput name="rate" min={1} max={5}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl id="comment" mt={4}>
          <FormLabel>Bình luận</FormLabel>
          <Textarea name="comment" placeholder="Nhập bình luận của bạn" />
        </FormControl>
        <Button mt={6} colorScheme="teal" type="submit">
          Gửi
        </Button>
      </form>
    </Box>
  );
};

export default FormCreateFeedback;
