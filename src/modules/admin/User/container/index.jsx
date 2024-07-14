import React, { useState } from 'react';
import UserName from '../components/UserName';
import styles from './styles.module.scss';
import UserEmail from '../components/UserEmail';
import formatDateTime from '../../../../utils/formateDateTime';
import AdminCrud from '../../../../components/core/AdminCrud';
import ContextCrudProvider from '../../../../components/core/AdminCrud/CrudContext/CrudContext';
import DialogCreateForm from '../../../../components/core/DialogCreateForm';
import { schemaFormFactory } from '../utils/schemaFormFactory';
import { FaFileExcel } from 'react-icons/fa'; // Import icon từ react-icons
import { exportToExcel } from '../../../../utils/export-excel';
import { Icon } from '@chakra-ui/react';
import Status from '../../../../components/admin/Status';
import UserPhone from '../components/PhoneNum';
import UserAvatar from '../components/UserAvatar';
import { useDispatch } from 'react-redux';
import { DELETE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import useInjectReducerSaga from '../../../../useCustom/admin/useInjectReducerSaga';
import langs from '../langs';
import { useTranslation } from 'react-i18next';
const User = () => {
  const { t } = useTranslation();
  const [selectElement, setSelectElement] = useState(null);
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: '',
    },
    endpoint: '/user',
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
        name: 'name',
        label: t(langs.name),
        default: 'N/A',
        component: UserName,
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
                dispatch({ type: DELETE_DATA, payload: `/user/${item.id}` });
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
                    endpoint={'/user'}
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
      {
        name: 'email',
        label: t(langs.email),
        default: 'N/A',

        component: UserEmail,
      },
      {
        name: 'url_avatar',
        label: t(langs.avatar),
        default: 'N/A',
        component: UserAvatar,
      },
      {
        name: 'email_verified_at',
        label: t(langs.emailVerifiedAt),
        default: 'N/A',
      },
      {
        name: 'phone_num',
        label: t(langs.phoneNum),
        default: 'N/A',
        component: UserPhone,
      },
      {
        name: 'role',
        label: t(langs.role),
        default: 'N/A',
      },
      {
        name: 'status',
        label: t(langs.status),
        default: 'N/A',
        component: Status,
      },
      {
        name: 'updated_at',
        label: t(langs.updatedAt),
        default: 'N/A',
        formatDate: formatDateTime,
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
        classNameProps={{
          tableBodyRow: styles[`table-body-row`],
          tableHeaderRow: styles[`table-header-row`],
        }}
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
export default User;
