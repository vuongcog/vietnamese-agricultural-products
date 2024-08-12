import React, { useState } from 'react';
import styles from './styles.module.scss';
import AdminCrud from '../../../../components/core/AdminCrud';
import ContextCrudProvider from '../../../../components/core/AdminCrud/CrudContext/CrudContext';
import DialogCreateForm from '../../../../components/core/DialogCreateForm';
import { schemaFormFactory } from '../utils/schemaFormFactory';
import {} from '../../../../components/core/AdminCrud/utils/inject-reducer-saga';
import {} from '../../../../utils/fetch-cancel-saga-reducer-with-key';
import Status from '../../../../components/admin/Status';
import CreatedAtComponent from '../../../../components/core/CreatedAt';
import UpdatedAtComponent from '../../../../components/core/UpdatedAt';
import CouponCode from '../components/CouponCode';
import CouponDiscount from '../components/CoutponDiscount';
import CouponStartDate from '../components/CouponStartDate';
import CouponEndDate from '../components/CouponEndDate';
import { DELETE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import { useDispatch } from 'react-redux';
import useInjectReducerSaga from '../../../../useCustom/admin/useInjectReducerSaga';
import { useTranslation } from 'react-i18next';
import langs from '../langs';
import DialogMessage from '../../../../components/core/DialogMessage';
import ProductDetail from '../../Product/components/ProductDetail';
import CouponDetail from '../components/CouponDetail';
import { useDisclosure } from '@chakra-ui/react';
const Coupon = () => {
  const [selectElement, setSelectElement] = useState(null);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [coupon, setCoupon] = useState();
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: '',
    },
    endpoint: '/coupon',
    mode: {
      breadcrumb: true,
      list: true,
      create: true,
      paging: true,
    },
    placeholderSearch: 'Tìm theo mã khuyến mãi',
    search: [
      {
        name: 'search',
        label: 'Title',
        type: 'text',
      },
    ],
    sort: [`coupon_code`, 'discount_value'],
    schema: [
      // {
      //   name: 'id',
      //   label: t(langs.id),
      //   default: 'N/A',
      // },
      {
        name: 'coupon_code',
        label: t(langs.code),
        default: 'N/A',
        component: CouponCode,
        dropdownActions: {
          items: [
            {
              icon: <i className="fa-brands fa-first-order-alt"></i>,
              name: 'view',
              label: <span className="font-semibold">Chi tiết</span>,
              callback: item => {
                setCoupon(item);
                onOpen();
              },
            },
            {
              icon: <i className=" fa fa-trash"></i>,
              name: 'delete',
              label: <span className=" font-semibold">Delete</span>,
              callback: item => {
                dispatch({
                  type: DELETE_DATA,
                  payload: `/coupon/${item.id}`,
                });
              },
            },

            {
              icon: (
                <i className="font-semibold fa-regular fa-pen-to-square"></i>
              ),
              name: 'edit',
              label: <span className="font-semibold">Edit</span>,
              callback: item => {
                setSelectElement(
                  <DialogCreateForm
                    item={item}
                    endpoint={'/coupon'}
                    callbackCancel={setSelectElement}
                    title="Update Coupon"
                    schemaForm={schemaFormFactory('edit')}
                  ></DialogCreateForm>
                );
              },
            },
          ],
        },
      },
      {
        name: 'discount_value',
        label: t(langs.discountValue),
        default: 'N/A',
        component: CouponDiscount,
      },
      // {
      //   name: 'coupon_start_date',
      //   label: t(langs.startDate),
      //   default: '  N/A',
      //   component: CouponEndDate,
      // },
      // {
      //   name: 'coupon_end_date',
      //   label: t(langs.endDate),
      //   default: 'N/A',
      //   component: CouponStartDate,
      // },
      {
        name: 'coupon_quantity',
        label: t(langs.quantity),
        default: 'N/A',
      },
      {
        name: 'status',
        label: t(langs.status),
        component: Status,
        default: 'N/A',
      },
      {
        name: 'created_at',
        label: t(langs.createdAt),
        default: 'N/A',
        component: CreatedAtComponent,
      },

      {
        name: 'updated_at',
        label: t(langs.updatedAt),
        default: 'N/A',
        component: UpdatedAtComponent,
      },
    ],
    initSearch: true,
  };
  useInjectReducerSaga();
  return (
    <div className={styles.module}>
      <ContextCrudProvider
        schemaForm={schemaFormFactory('create')}
        {...crudOptions}
        classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
      >
        {selectElement}
        <DialogMessage
          width={1000}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        >
          <CouponDetail coupon={coupon}></CouponDetail>
        </DialogMessage>
        <AdminCrud
          classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
          {...crudOptions}
        ></AdminCrud>
      </ContextCrudProvider>
    </div>
  );
};
export default Coupon;
