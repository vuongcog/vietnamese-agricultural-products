import { ADD_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormCreate = {
  title: langs.CREATE_BLOG,
  doneText: ['Cancel', 'Create'],
  button: langs.createBlog,
  type: ADD_DATA,
  schemaForm: [
    {
      name: 'id_cat',
      label: langs.idCategory,
      placeholder: langs.idCategory,
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
      isRequire: true,
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
      isRequire: true,
    },
  ],
};
