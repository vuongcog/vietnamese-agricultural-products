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
