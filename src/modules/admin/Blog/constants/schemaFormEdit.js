import { UPDATE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormEdit = {
  title: langs.EDIT_BLOG,
  doneText: ['Cancel', 'Save'],
  type: UPDATE_DATA,
  schemaForm: [
    {
      name: 'id_cat',
      label: langs.idCategory,
      placeholder: 'id_cat',
      endpoint: 'http://127.0.0.1:8000/api/blog/category',
      isRequire: true,
      labelField: 'name',
      valueField: 'id',
      type: 'select',
    },
    {
      name: 'blog_title',
      label: langs.title,
      placeholder: langs.title,
      isRequire: true,
      type: 'text',
    },
    {
      name: 'content',
      label: langs.content,
      placeholder: langs.content,
      isRequire: true,
      type: 'text',
    },
    {
      name: 'blog_image',
      label: langs.image,
      placeholder: langs.image,
      type: 'file',
    },
    {
      name: 'status',
      label: langs.status,
      type: 'select',
      items: [
        {
          name: 'inactive',
          value: 'inactive',
        },
        {
          name: 'active',
          value: 'active',
        },
      ],
      placeholder: 'status',
      isRequire: true,
    },
  ],
};
