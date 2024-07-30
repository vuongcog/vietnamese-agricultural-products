import { ADD_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormCreate = {
  title: langs.CREATE_BLOG_CATEGORY,
  doneText: ['Cancel', 'Create'],
  button: langs.createBlogCategory,
  type: ADD_DATA,
  schemaForm: [
    {
      name: 'name',
      label: langs.name,
      placeholder: langs.name,
      isRequire: true,
      type: 'text',
      minLength: 5,
      maxLenght: 255,
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
