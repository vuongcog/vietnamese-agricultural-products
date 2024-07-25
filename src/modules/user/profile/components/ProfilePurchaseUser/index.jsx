/* eslint-disable arrow-body-style */
import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import useProducerDataUser from '../../../../../useCustom/user/useProducerDataUser';
import { useDisclosure } from '@chakra-ui/react';
import DialogMessage from '../../../../../components/core/DialogMessage';
import { formattedNumber } from '../../../../../utils/format-number';
// eslint-disable-next-line arrow-body-style
const ProfilePurchaseUser = () => {
  const product = {
    product_name: 'Cam sấy khô',
    product_image:
      'https://esupplychain.vn/data/product/mainimages/original/product6362.jpg',
    unit_prices: '10000',
  };
  const {
    dataUser: { orders },
  } = useProducerDataUser();
  const RenderRowHeaderProduct = () => {
    return (
      <tr className={styles['row-heading']}>
        <th>Ảnh</th>
        <th>Tên sản phẩm</th>
        <th>Số lượng</th>
        <th>Đơn giá</th>
        <th>Tổng giá</th>
      </tr>
    );
  };
  const RenderRowBodyProduct = ({ item }) => {
    return (
      <tr>
        <td>
          <div className="flex items-center justify-center ">
            <img
              className="w-[60px] h-[60px] object-cover rounded-full"
              src={product.product_image}
            ></img>
          </div>
        </td>
        <td>{product.product_name}</td>
        <td>{item.quantity}</td>
        <td>{formattedNumber(item.unit_prices)}</td>
        <td>{formattedNumber(item.unit_prices)}</td>
      </tr>
    );
  };
  const RenderTableProduct = ({ products }) => {
    return (
      <div>
        <table className={styles[`table-product`]}>
          <thead>
            <RenderRowHeaderProduct></RenderRowHeaderProduct>
          </thead>
          <tbody>
            {products.map(item => {
              return (
                <RenderRowBodyProduct
                  key={item.id}
                  item={item}
                ></RenderRowBodyProduct>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  const RenderRowBodyTable = ({ item }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <tr className="cursor-pointer" onClick={onOpen}>
        <td>{item.order_code}</td>
        <td>{item.order_total_prices}</td>
        <td>{item.order_notes}</td>
        <td>{item.customer}</td>
        <td>{item.payment_type}</td>
        <td>{item.payment_status}</td>
        <td>{item.delivery_address}</td>
        <td>{item.phone}</td>
        <td>{item.id_coupon || 'N/A'}</td>
        <td>{item.id_payment || 'N/A'}</td>
        <td>{item.created_at}</td>
        <td>
          <DialogMessage
            width={'auto'}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          >
            <RenderTableProduct products={item.items}></RenderTableProduct>
          </DialogMessage>
        </td>
      </tr>
    );
  };
  const RenderRowHeaderTable = () => {
    return (
      <tr className={styles['row-heading']}>
        <th>Mã đơn hàng</th>
        <th>Tổng giá</th>
        <th>Ghi chú</th>
        <th>Tên người nhận</th>
        <th>Hình thức thanh toán</th>
        <th>Trạng thái thanh toán</th>
        <th>Địa chỉ vận chuyển</th>
        <th>Số điện thoại</th>
        <th>Mã khuyến mãi</th>
        <th>Mã thanh toán</th>
        <th>Ngày tạo</th>
      </tr>
    );
  };
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={classNames(styles['heading-container'])}>
          <RenderRowHeaderTable></RenderRowHeaderTable>
        </thead>
        <tbody className={classNames(styles['body-container'])}>
          {orders?.map(item => {
            return (
              <RenderRowBodyTable
                key={item.order_code}
                item={item}
              ></RenderRowBodyTable>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePurchaseUser;
