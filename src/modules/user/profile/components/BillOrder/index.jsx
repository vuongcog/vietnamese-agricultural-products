import React, { useRef } from 'react';
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Grid,
  Container,
  Button,
  Divider,
  VStack,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { useReactToPrint } from 'react-to-print';
import { MAPPER_STATUS_ORDER } from '../../../../../constants/mapper-status-order';

const BillOrder = React.forwardRef(({ order }, ref) => {
  const calculateTotal = () =>
    order.items.reduce(
      (total, item) => total + parseFloat(item.unit_prices) * item.quantity,
      0
    );

  const tableBgColor = useColorModeValue('white', 'gray.800');
  const tableBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Container
      maxW="container.md"
      ref={ref}
      bg={useColorModeValue('gray.50', 'gray.700')}
      borderRadius="md"
      boxShadow="xl"
    >
      <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
        <VStack spacing={4} align="stretch">
          <Text
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            mb={6}
            fontFamily="serif"
          >
            Hóa Đơn
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={6}>
            <Box>
              <Text fontWeight="bold" fontFamily="serif">
                Mã đơn hàng: {order.order_code}
              </Text>
              <Text fontFamily="serif">Khách hàng: {order.customer}</Text>
              <Text fontFamily="serif">Email: {order.email}</Text>
              <Text fontFamily="serif">Điện thoại: {order.phone}</Text>
              <Text fontFamily="serif">
                Địa chỉ giao hàng: {order.delivery_address}
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" fontFamily="serif">
                Hình thức thanh toán: {order.payment_type}
              </Text>
              <Text fontFamily="serif">
                Trạng thái thanh toán: {order.payment_status}
              </Text>
              <Text fontFamily="serif">
                Trạng thái đơn hàng: {MAPPER_STATUS_ORDER[order.status]}
              </Text>
              <Text fontFamily="serif">
                Ghi chú đơn hàng: {order.order_notes}
              </Text>
              <Text fontFamily="serif">
                Ngày tạo: {new Date(order.created_at).toLocaleString()}
              </Text>
            </Box>
          </Grid>
          <Divider mb={6} />
          <Table
            variant="simple"
            bg={tableBgColor}
            border="1px solid"
            borderColor={tableBorderColor}
          >
            <Thead bg="gray.200">
              <Tr>
                <Th fontFamily="serif">Sản phẩm</Th>
                <Th fontFamily="serif">Số lượng</Th>
                <Th fontFamily="serif">Đơn giá</Th>
                <Th fontFamily="serif">Tổng</Th>
              </Tr>
            </Thead>
            <Tbody>
              {order.items.map(item => (
                <Tr key={item.id}>
                  <Td fontFamily="serif">{item.products.product_name}</Td>
                  <Td fontFamily="serif">{item.quantity}</Td>
                  <Td fontFamily="serif">
                    {parseFloat(item.unit_prices).toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </Td>
                  <Td fontFamily="serif">
                    {(
                      parseFloat(item.unit_prices) * item.quantity
                    ).toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Td colSpan={3} align="right">
                  <Text fontWeight="bold" fontFamily="serif">
                    Tổng cộng
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight="bold" fontFamily="serif">
                    {calculateTotal().toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </VStack>
      </Box>
    </Container>
  );
});
BillOrder.displayName = 'BillOrder';

const BillOrderPrintable = ({ order }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Container maxW="container.md" position="relative">
      <Button
        onClick={handlePrint}
        mb={4}
        colorScheme="teal"
        fontFamily="serif"
        position="absolute"
        top={4}
        right={4}
      >
        In hóa đơn
      </Button>
      <BillOrder ref={componentRef} order={order} />
    </Container>
  );
};

export default BillOrderPrintable;
