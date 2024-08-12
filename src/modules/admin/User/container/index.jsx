import React, { useState } from 'react';
import UserName from '../components/UserName';
import styles from './styles.module.scss';
import UserEmail from '../components/UserEmail';
import AdminCrud from '../../../../components/core/AdminCrud';
import ContextCrudProvider from '../../../../components/core/AdminCrud/CrudContext/CrudContext';
import DialogCreateForm from '../../../../components/core/DialogCreateForm';
import {
  schemaFormFactory,
  schemaFormFactoryManager,
} from '../utils/schemaFormFactory';
import Status from '../../../../components/admin/Status';
import UserPhone from '../components/PhoneNum';
import UserAvatar from '../components/UserAvatar';
import useInjectReducerSaga from '../../../../useCustom/admin/useInjectReducerSaga';
import langs from '../langs';
import { useTranslation } from 'react-i18next';
import CreatedAtComponent from '../../../../components/core/CreatedAt';
import UpdatedAtComponent from '../../../../components/core/UpdatedAt';
import useProducerDataUser from '../../../../useCustom/admin/useProducerDataUser';
import UserProfile from '../components/UserDetail';
import { useDisclosure } from '@chakra-ui/react';
import DialogMessage from '../../../../components/core/DialogMessage';
const User = () => {
  const { t } = useTranslation();
  const [selectElement, setSelectElement] = useState(null);
  const [user, setUser] = useState({});
  const { inforUser } = useProducerDataUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    sort: [`name`, `email`],
    schema: [
      {
        name: 'name',
        label: t(langs.name),
        default: 'N/A',
        component: UserName,
        dropdownActions: {
          items: [
            {
              icon: <i className="fa-brands fa-first-order-alt"></i>,
              name: 'view',
              label: <span className="font-semibold">Chi tiết</span>,
              callback: item => {
                setUser(item);
                onOpen();
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
                    inheritanceData={
                      inforUser?.role === 'manager' ? true : false
                    }
                    item={item}
                    endpoint={'/user'}
                    callbackCancel={setSelectElement}
                    title="Update User"
                    schemaForm={
                      inforUser?.role === 'admin'
                        ? schemaFormFactory('edit')
                        : schemaFormFactoryManager('edit')
                    }
                  ></DialogCreateForm>
                );
              },
            },
          ],
        },
      },
      // {
      //   name: 'email',
      //   label: t(langs.email),
      //   default: 'N/A',

      //   component: UserEmail,
      // },
      // {
      //   name: 'url_avatar',
      //   label: t(langs.avatar),
      //   default: 'N/A',
      //   component: UserAvatar,
      // },
      // {
      //   name: 'email_verified_at',
      //   label: t(langs.emailVerifiedAt),
      //   default: 'N/A',
      // },
      // {
      //   name: 'phone_num',
      //   label: t(langs.phoneNum),
      //   default: 'N/A',
      //   component: UserPhone,
      // },
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
        name: 'created_at',
        label: t(langs.updatedAt),
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
        schemaForm={
          inforUser?.role === 'admin'
            ? schemaFormFactory('create')
            : schemaFormFactoryManager('create')
        }
        {...crudOptions}
        classNameProps={{
          tableBodyRow: styles[`table-body-row`],
          tableHeaderRow: styles[`table-header-row`],
        }}
      >
        {selectElement}
        <DialogMessage
          width={1000}
          onClose={onClose}
          onOpen={onOpen}
          isOpen={isOpen}
        >
          <UserProfile user={user}></UserProfile>
        </DialogMessage>
        <AdminCrud
          classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
          {...crudOptions}
        ></AdminCrud>
      </ContextCrudProvider>
    </div>
  );
};
export default User;
