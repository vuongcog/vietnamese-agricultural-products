import React, { useState } from 'react';
import styles from './styles.module.scss';
import AdminCrud from '../../../../components/core/AdminCrud';
import ContextCrudProvider from '../../../../components/core/AdminCrud/CrudContext/CrudContext';
import {} from '../../../../components/core/AdminCrud/utils/inject-reducer-saga';
import {} from '../../../../utils/fetch-cancel-saga-reducer-with-key';
import useInjectReducerSaga from '../../../../useCustom/admin/useInjectReducerSaga';
import { useTranslation } from 'react-i18next';
import langs from '../langs';
import OrderTotalPrice from '../components/OrderTotalPrices';
import OrderCode from '../components/OrderCode';
import OrderPaymentType from '../components/OrderPaymentType';
import OrderNotes from '../components/OrderNotes';
import OrderPaymentStatus from '../components/PaymentStatus';
import UpdatedAtComponent from '../../../../components/core/UpdatedAt';
import CreatedAtComponent from '../../../../components/core/CreatedAt';
import OrderDeliveryAddress from '../components/OrderDeliveryAddress';
import OrderCustomer from '../components/OrderCustomer';
import { useDisclosure } from '@chakra-ui/react';
import BillOrderPrintable from '../../../user/profile/components/BillOrder';
import DialogMessage from '../../../../components/core/DialogMessage';
const orderItem = {
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
const Oder = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [order, setOder] = useState({});
  const crudOptions = {
    endpointParams: {
      q: '',
    },
    endpoint: '/order',
    mode: {
      breadcrumb: true,
      list: true,
      create: false,
      paging: true,
    },
    search: [
      {
        name: 'search',
        label: 'Title',
        type: 'text',
      },
    ],
    onClickRow: item => {
      console.log(item);
      setOder(item);
      onOpen();
    },
    schema: [
      {
        name: 'id',
        label: t(langs.id),
        default: 'N/A',
      },
      {
        name: 'order_code',
        label: t(langs.order_code),
        default: 'N/A',
        component: OrderCode,
      },
      {
        name: 'order_total_prices',
        label: t(langs.order_total_prices),
        default: '  N/A',
        component: OrderTotalPrice,
      },
      {
        name: 'customer',
        label: t(langs.customer),
        component: OrderCustomer,
      },
      {
        name: 'status',
        label: t(langs.status),
        default: 'N/A',
      },
      {
        name: 'payment_type',
        label: t(langs.payment_type),
        default: 'N/A',
        component: OrderPaymentType,
      },
      {
        name: 'order_notes',
        label: 'Notes',
        default: 'N/A',
        component: OrderNotes,
      },

      {
        name: 'payment_status',
        label: t(langs.payment_status),
        default: 'N/A',
        component: OrderPaymentStatus,
      },
      {
        name: 'email',
        label: t(langs.email),
        default: 'N/A',
      },

      {
        name: 'delivery_address',
        label: t(langs.delivery_address),
        default: 'N/A',
        component: OrderDeliveryAddress,
      },
      {
        name: 'phone',
        label: 'Phone',
        default: 'N/A',
      },

      {
        name: 'created_at',
        label: t(langs.created_at),
        default: 'N/A',
        component: CreatedAtComponent,
      },
      {
        name: 'updated_at',
        label: t(langs.updated_at),
        default: 'N/A',
        component: UpdatedAtComponent,
      },
      {
        name: 'id_coupon',
        label: t(langs.id_coupon),
        default: 'N/A',
      },
      {
        name: 'id_user',
        label: t(langs.id_user),
        default: 'N/A',
      },
      {
        name: 'id_payment',
        label: t(langs.id_payment),
        default: 'N/A',
      },
    ],
    initSearch: true,
  };

  useInjectReducerSaga();

  return (
    <div className={styles.module}>
      <ContextCrudProvider
        {...crudOptions}
        classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
      >
        <div>
          <DialogMessage
            width={1000}
            onClose={onClose}
            onOpen={onOpen}
            isOpen={isOpen}
          >
            <BillOrderPrintable order={order}></BillOrderPrintable>
          </DialogMessage>
        </div>
        <AdminCrud
          classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
          {...crudOptions}
        ></AdminCrud>
      </ContextCrudProvider>
    </div>
  );
};
export default Oder;
