import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../../components/user/Header';
import useInjectReducerSagaShopping from '../../useCustom/user/useInjectReducerSagaShopping';
import PropTypes from '../../utils/prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_DATA_USER } from '../../actions/action-infor-user';
import BillOrderPrintable from '../../modules/user/profile/components/BillOrder';
const order = {
  id: 11,
  order_code: 'COD-ORDER-278135',
  order_total_prices: '9700000.000',
  status: 'ordered',
  order_notes: 'Giao gio hanh chinh',
  id_user: 1,
  customer: 'Nguyen Van Huynh',
  payment_type: 'THANH TOÁN KHI NHẬN HÀNG',
  payment_status: 'chưa thanh toán',
  email: 'huynhnhatvuong01012002@gmail.com',
  delivery_address: 'Hồ Chí Minh/Bình Thạnh/05//4/8b',
  phone: '092362637',
  id_coupon: null,
  id_payment: null,
  created_at: '2024-07-23T13:08:24.000000Z',
  updated_at: '2024-07-23T13:08:24.000000Z',
  items: [
    {
      id: 8,
      id_order: 11,
      id_product: 2,
      unit_prices: '100000.000',
      quantity: 5,
      created_at: '2024-07-23T13:08:24.000000Z',
      updated_at: '2024-07-23T13:08:24.000000Z',
      products: {
        id: 2,
        id_category: 1,
        product_name: 'Cam sấy khô',
        product_slug: 'cam-say-kho',
        product_image: 'http://127.0.0.1:8000/img/cam-say-kho.jpg',
        product_des:
          '<h3>Mô tả chung</h3><p>Cà chua là một loại quả thuộc họ cà (Solanaceae)...</p>',
        product_info:
          '<h3>Mô tả chung</h3><p>Cà chua là một loại quả thuộc họ cà (Solanaceae)...</p>',
        quantity: 0,
        unit_prices: '100000.000',
        status: 'active',
        created_at: '2024-06-01T09:23:14.000000Z',
        updated_at: '2024-07-27T04:56:06.000000Z',
      },
    },
    {
      id: 9,
      id_order: 11,
      id_product: 3,
      unit_prices: '1150000.000',
      quantity: 1,
      created_at: '2024-07-23T13:08:24.000000Z',
      updated_at: '2024-07-23T13:08:24.000000Z',
      products: {
        id: 3,
        id_category: 1,
        product_name: 'Vỏ bưởi sấy khô',
        product_slug: 'vo-buoi-say-kho',
        product_image: 'http://127.0.0.1:8000/img/vo-buoi-say-kho.jpg',
        product_des:
          '<h3>Mô tả chung</h3><p>Cà chua là một loại quả thuộc họ cà (Solanaceae)...</p>',
        product_info:
          '<h3>Mô tả chung</h3><p>Cà chua là một loại quả thuộc họ cà (Solanaceae)...</p>',
        quantity: 998,
        unit_prices: '1150000.000',
        status: 'active',
        created_at: '2024-07-19T18:55:03.000000Z',
        updated_at: '2024-07-27T04:57:30.000000Z',
      },
    },
    // Các sản phẩm khác tương tự
  ],
};
const LayoutUser = ({ children }) => {
  const dispatch = useDispatch();

  useInjectReducerSagaShopping();
  useEffect(() => {
    try {
      dispatch({
        type: FETCH_DATA_USER,
        payload: { endpoint: '/taikhoan/thongtin-nguoidung' },
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <UserHeader></UserHeader>
      <div className={classNames(`mt-[80px]`, styles.content)}>
        {children}
        <Outlet></Outlet>
        <BillOrderPrintable order={order} />
      </div>
    </div>
  );
};
LayoutUser.propTypes = {
  children: PropTypes.element,
};

export default LayoutUser;
