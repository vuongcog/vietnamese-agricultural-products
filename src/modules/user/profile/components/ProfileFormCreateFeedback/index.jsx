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
import { parseObjectJson } from '../../../../../utils/parse-json';
import { useNavigate } from 'react-router-dom';

const FormCreateFeedback = ({ id_user, id_product, slug }) => {
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      id_user,
      id_product,
      rate: formData.get('rate'),
      comment: formData.get('comment'),
    };
    const http = new HttpUserClient('/danhgiasanpham/themdanhgia');
    http
      .createFeedback(data)
      .then(res => {
        if (res.status === 201) toast.success('Thêm đánh giá thành công');
        if (res.status === 403)
          toast.success(
            'Người dùng cần phải mua sản phẩm này trước khi đánh giá'
          );
      })
      .catch(err => {
        toast.error('Hệ thống đang bị trục trặc, xin vui lòng thử lại sau');
      });
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
        <div className="flex items-center gap-2">
          <Button
            mt={6}
            type="submit"
            className="hover:text-blue-500 hover:underline hover:cursor-pointer"
          >
            Gửi
          </Button>
          <Button
            className="hover:text-blue-500 hover:underline hover:cursor-pointer"
            mt={6}
            onClick={() => {
              navigate(`/detail?slug=${slug}&id=${id_product}`);
            }}
            type="submit"
          >
            Xem sản phẩm
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default FormCreateFeedback;
