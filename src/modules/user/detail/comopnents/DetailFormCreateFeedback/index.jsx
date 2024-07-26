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

const FormComponent = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      id_user: formData.get('id_user'),
      id_product: formData.get('id_product'),
      rate: formData.get('rate'),
      comment: formData.get('comment'),
    };
    console.log(data);
    // Thực hiện hành động gì đó với dữ liệu, ví dụ: gửi lên server
  };

  return (
    <ChakraProvider>
      <Box maxWidth="500px" mx="auto" mt="5">
        <form onSubmit={handleSubmit}>
          <FormControl id="id_user" isRequired>
            <FormLabel>ID Người dùng</FormLabel>
            <Input
              name="id_user"
              type="text"
              placeholder="Nhập ID người dùng"
            />
          </FormControl>
          <FormControl id="id_product" isRequired mt={4}>
            <FormLabel>ID Sản phẩm</FormLabel>
            <Input
              name="id_product"
              type="text"
              placeholder="Nhập ID sản phẩm"
            />
          </FormControl>
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
    </ChakraProvider>
  );
};

export default FormComponent;
