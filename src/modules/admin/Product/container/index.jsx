import React, { useState } from 'react';
import styles from './styles.module.scss';
import AdminCrud from '../../../../components/core/AdminCrud';
import ContextCrudProvider from '../../../../components/core/AdminCrud/CrudContext/CrudContext';
import DialogCreateForm from '../../../../components/core/DialogCreateForm';
import { schemaFormFactory } from '../utils/schemaFormFactory';
import {} from '../../../../components/core/AdminCrud/utils/inject-reducer-saga';
import ProductDes from '../components/ProductDes';
import {} from '../../../../utils/fetch-cancel-saga-reducer-with-key';
import ProductName from '../components/ProductName';
import Status from '../../../../components/admin/Status';
import ProductInfo from '../components/ProductInfo';
import ProductUnitPrice from '../components/ProductUnitPrice';
import { exportToExcel } from '../../../../utils/export-excel';
import { Icon } from '@chakra-ui/react';
import { FaFileExcel } from 'react-icons/fa';
import ProductSlug from '../components/ProductSlug';
import ProductImage from '../components/ProductImage';
import CreatedAtComponent from '../../../../components/core/CreatedAt';
import UpdatedAtComponent from '../../../../components/core/UpdatedAt';
import { useDispatch } from 'react-redux';
import { DELETE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import useInjectReducerSaga from '../../../../useCustom/admin/useInjectReducerSaga';
import { useTranslation } from 'react-i18next';
import langs from '../langs';
const Product = () => {
  const [selectElement, setSelectElement] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: '',
    },
    endpoint: '/product',
    mode: {
      breadcrumb: true,
      list: true,
      create: true,
      paging: true,
    },
    search: [
      {
        name: 'search',
        label: 'Title',
        type: 'text',
      },
    ],
    sort: [`product_name`, `unit_prices`],
    schema: [
      {
        name: 'product_name',
        label: t(langs.name),
        default: 'N/A',
        component: ProductName,
        dropdownActions: {
          items: [
            {
              icon: <i className=" fa fa-trash"></i>,
              name: 'delete',
              label: <span className=" font-semibold">Delete</span>,
              callback: item => {
                dispatch({ type: DELETE_DATA, payload: `/product/${item.id}` });
              },
            },
            // {
            //   icon: <Icon as={FaFileExcel} />,
            //   name: 'export-excel',
            //   label: <span className="font-semibold">Export Excel</span>,
            //   callback: (items, name) => {
            //     exportToExcel(items, name);
            //   },
            // },
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
                    endpoint={'/product'}
                    callbackCancel={setSelectElement}
                    title="Update User"
                    schemaForm={schemaFormFactory('edit')}
                  ></DialogCreateForm>
                );
              },
            },
          ],
        },
      },

      // {
      //   name: 'product_slug',
      //   label: t(langs.slug),
      //   default: 'N/A',
      //   component: ProductSlug,
      // },

      {
        name: 'product_image',
        label: t(langs.image),
        default: '  N/A',
        component: ProductImage,
      },
      {
        name: 'product_des',
        label: t(langs.des),
        component: ProductDes,
        default: 'N/A',
      },
      {
        name: 'product_info',
        label: t(langs.info),
        component: ProductInfo,
        default: 'N/A',
      },
      {
        name: 'quantity',
        label: t(langs.quantity),
        default: 0,
      },
      {
        name: 'unit_prices',
        label: t(langs.unitPrices),
        component: ProductUnitPrice,
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
        <AdminCrud
          classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
          {...crudOptions}
        ></AdminCrud>
      </ContextCrudProvider>
    </div>
  );
};
export default Product;
