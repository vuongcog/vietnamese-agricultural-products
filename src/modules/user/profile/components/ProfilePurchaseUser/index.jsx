/* eslint-disable arrow-body-style */
import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import useProducerDataUser from '../../../../../useCustom/user/useProducerDataUser';
import { useDisclosure } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

import DialogMessage from '../../../../../components/core/DialogMessage';
import ProfileProductCard from '../ProfileProductCard';
import OrderCode from '../OrderCode';
import OrderNotes from '../../../../admin/Order/components/OrderNotes';
import OrderCustomer from '../../../../admin/Order/components/OrderCustomer';
import OrderPaymentType from '../../../../admin/Order/components/OrderPaymentType';
import OrderPaymentStatus from '../../../../admin/Order/components/PaymentStatus';
import OrderDeliveryAddress from '../../../../admin/Order/components/OrderDeliveryAddress';
import OrderTotalPrice from '../../../../admin/Order/components/OrderTotalPrices';
import CreatedAtComponent from '../../../../../components/core/CreatedAt';
import UpdatedAtComponent from '../../../../../components/core/UpdatedAt';
// eslint-disable-next-line arrow-body-style
const ProfilePurchaseUser = () => {
  const {
    dataUser: { orders },
  } = useProducerDataUser();

  const RenderRowBodyProduct = ({ item }) => {
    return <ProfileProductCard item={item}></ProfileProductCard>;
  };
  const RenderTableProduct = ({ products }) => {
    return (
      <div className="flex flex-col pl-60 gap-6">
        {products.map(item => {
          return (
            <>
              <RenderRowBodyProduct
                key={item.id}
                item={item}
              ></RenderRowBodyProduct>
              <Divider borderWidth="1px" />
            </>
          );
        })}
      </div>
    );
  };
  const RenderRowBodyTable = ({ item }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <tr className="cursor-pointer" onClick={onOpen}>
        <td>
          <OrderCode order_code={item.order_code}></OrderCode>
        </td>
        <td>
          <OrderTotalPrice
            order_total_prices={item.order_total_prices}
          ></OrderTotalPrice>
        </td>
        <td>
          <OrderNotes order_notes={item.order_notes}></OrderNotes>
        </td>
        <td>
          <OrderCustomer customer={item.customer}></OrderCustomer>
        </td>
        <td>
          <OrderPaymentType payment_type={item.payment_type}></OrderPaymentType>
        </td>
        <td>
          <OrderPaymentStatus
            payment_status={item.payment_status}
          ></OrderPaymentStatus>
        </td>
        <td>
          <OrderDeliveryAddress
            delivery_address={item.delivery_address}
          ></OrderDeliveryAddress>
        </td>
        <td>
          <CreatedAtComponent created_at={item.created_at}></CreatedAtComponent>
        </td>
        <td>
          <UpdatedAtComponent updated_at={item.updated_at}></UpdatedAtComponent>
        </td>
        <td> {item.phone}</td>
        <td> {item.id_coupon || 'N/A'}</td>
        <td> {item.id_payment || 'N/A'}</td>

        <DialogMessage
          width={'auto'}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <RenderTableProduct products={item.items}></RenderTableProduct>
        </DialogMessage>
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
