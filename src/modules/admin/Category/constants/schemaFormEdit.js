import { UPDATE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormEdit = {
  title: langs.EDIT_CATEGORY,
  doneText: ['Cancel', 'Save'],
  type: UPDATE_DATA,
  schemaForm: [
    {
      name: 'category_name',
      label: langs.name,
      placeholder: 'category_name',
      isRequire: true,
      type: 'text',
      minLength: 5,
      maxLength: 255,
    },
    {
      name: 'category_des',
      label: langs.des,
      placeholder: 'category_des',
      type: 'text',
      isRequire: true,
      maxLength: 255,
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
