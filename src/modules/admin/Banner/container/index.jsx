import React, { useState } from 'react';
import styles from './styles.module.scss';
import AdminCrud from '../../../../components/core/AdminCrud';
import ContextCrudProvider from '../../../../components/core/AdminCrud/CrudContext/CrudContext';
import DialogCreateForm from '../../../../components/core/DialogCreateForm';
import { schemaFormFactory } from '../utils/schemaFormFactory';
import Status from '../../../../components/admin/Status';
import { Icon } from '@chakra-ui/react';
import { FaFileExcel } from 'react-icons/fa';
import { exportToExcel } from '../../../../utils/export-excel';
import CreatedAtComponent from '../../../../components/core/CreatedAt';
import UpdatedAtComponent from '../../../../components/core/UpdatedAt';
import BannerTitle from '../components/BannerTitle';
import { DELETE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import { useDispatch } from 'react-redux';
import useInjectReducerSaga from '../../../../useCustom/admin/useInjectReducerSaga';
import { useTranslation } from 'react-i18next';
import langs from '../langs';
import BannerImage from '../components/BannerImage';
import BannerDes from '../components/BannerDes';
const Category = () => {
  const [selectElement, setSelectElement] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: '',
    },
    endpoint: '/banner',
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
    schema: [
      {
        name: 'id',
        label: t(langs.id),
        default: 'N/A',
      },
      {
        name: 'id_user',
        label: t(langs.idUser),
        default: 'N/A',
      },
      {
        name: 'banner_title',
        label: t(langs.title),
        default: 'N/A',
        component: BannerTitle,
        dropdownActions: {
          items: [
            {
              icon: <i className="font-semibold fa-regular fa-copy"></i>,
              name: 'duplicate',
              label: <span className="font-semibold">Duplicate</span>,
              callback: () => {},
            },
            {
              icon: <i className=" fa fa-trash"></i>,
              name: 'delete',
              label: <span className=" font-semibold">Delete</span>,
              callback: item => {
                console.log(item);
                dispatch({
                  type: DELETE_DATA,
                  payload: `/banner/${item.id}`,
                });
              },
            },
            {
              icon: <Icon as={FaFileExcel} />,
              name: 'export-excel',
              label: <span className="font-semibold">Export Excel</span>,
              callback: (items, name) => {
                exportToExcel(items, name);
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
                    endpoint={'/banner'}
                    callbackCancel={setSelectElement}
                    title="Update User"
                    schemaForm={schemaFormFactory('edit')}
                  ></DialogCreateForm>
                );
              },
            },
          ],
        },
        // component: UserEmail,
      },
      {
        name: 'banner_image',
        label: t(langs.image),
        default: 'N/A',
        component: BannerImage,
      },
      {
        name: 'banner_des',
        label: t(langs.des),
        default: 'N/A',
        component: BannerDes,
      },
      {
        name: 'status',
        label: t(langs.status),
        default: 'N/A',
        component: Status,
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
export default Category;
