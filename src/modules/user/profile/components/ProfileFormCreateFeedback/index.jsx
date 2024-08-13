import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
import axios from 'axios';
import HttpUserClient from '../../../../../utils/http/httpUserClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const FormCreateFeedback = ({ id_user, id_product, slug }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (!rating) {
      toast.warning('Phải đánh giá mức độ hài lòng sản phẩm');
      return;
    }
    if (!formData.get('comment')) {
      toast.warning('Phải bình luận sản phẩm');
      return;
    }
    const data = {
      id_user,
      id_product,
      rate: rating,
      comment: formData.get('comment'),
    };

    const http = new HttpUserClient('/danhgiasanpham/themdanhgia');
    http
      .createFeedback(data)
      .then(res => {
        if (res.status === 201) toast.success('Thêm đánh giá thành công');
        if (res.status === 403)
          toast.success(
            'Bạn dùng cần phải mua sản phẩm này trước khi đánh giá'
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
          <Rating
            emptySymbol={<FaRegStar color="#ccc" size={30} />}
            fullSymbol={<FaStar color="#FFD700" size={30} />}
            fractions={1}
            initialRating={rating}
            onChange={rate => setRating(rate)}
          />
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
            type="button"
          >
            Xem sản phẩm
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default FormCreateFeedback;
