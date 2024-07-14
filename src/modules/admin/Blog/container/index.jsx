import React, { useState } from 'react';
import styles from './styles.module.scss';
import AdminCrud from '../../../../components/core/AdminCrud';
import ContextCrudProvider from '../../../../components/core/AdminCrud/CrudContext/CrudContext';
import DialogCreateForm from '../../../../components/core/DialogCreateForm';
import { schemaFormFactory } from '../utils/schemaFormFactory';
import Status from '../../../../components/admin/Status';
import { exportToExcel } from '../../../../utils/export-excel';
import { Icon } from '@chakra-ui/react';
import { FaFileExcel } from 'react-icons/fa';
import CreatedAtComponent from '../../../../components/core/CreatedAt';
import UpdatedAtComponent from '../../../../components/core/UpdatedAt';
import BlogIcon from '../components/BlogTitle';
import BlogSlug from '../components/BlogSlug';
import BlogContent from '../components/BlogContent';
import { useDispatch } from 'react-redux';
import { DELETE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import useInjectReducerSaga from '../../../../useCustom/admin/useInjectReducerSaga';
import { useTranslation } from 'react-i18next';
import langs from '../langs';
import BlogImage from '../components/BlogImage';
import ReactQuill from 'react-quill';
const Product = () => {
  const [selectElement, setSelectElement] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: '',
    },
    endpoint: '/blog',
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
        label: t(langs.idBlog),
        default: 'N/A',
      },

      {
        name: 'blog_title ',
        label: t(langs.title),
        default: 'N/A',
        component: BlogIcon,
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
                dispatch({ type: DELETE_DATA, payload: `/blog/${item.id}` });
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
                    endpoint={'/blog'}
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
        name: 'blog_image',
        label: t(langs.image),
        default: '  N/A',
        component: BlogImage,
      },
      {
        name: 'blog_slug',
        label: t(langs.slug),
        component: BlogSlug,
        default: 'N/A',
      },
      {
        name: 'content',
        label: t(langs.content),
        default: 'N/A',
        component: BlogContent,
      },
      {
        name: 'id_user ',
        label: t(langs.idUser),
        default: 'N/A',
      },
      {
        name: 'id_cat ',
        label: t(langs.idCategory),
        default: 'N/A',
        component: ({ id_cat }) => <div>{id_cat}</div>,
      },
      {
        name: 'view',
        label: t(langs.view),
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
        component: CreatedAtComponent,
        default: 'N/A',
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
