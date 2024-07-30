import { ADD_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormCreate = {
  title: langs.CREATE_BANNER,
  doneText: ['Cancel', 'Save'],
  button: langs.createBanner,
  type: ADD_DATA,
  schemaForm: [
    {
      name: 'banner_title',
      label: langs.title,
      placeholder: langs.title,
      isRequire: true,
      type: 'text',
      minLength: 5,
      maxLength: 255,
    },
    {
      name: 'banner_des',
      label: langs.des,
      placeholder: langs.des,
      isRequire: true,
      type: 'text',
      minLength: 5,
      maxLength: 255,
    },
    {
      name: 'banner_image',
      label: langs.image,
      placeholder: langs.image,
      isRequire: true,
      type: 'file',
    },
    {
      name: 'sort',
      label: langs.sort,
      type: 'select',
      items: [
        {
          name: '1',
          value: '1',
        },
        {
          name: '-1',
          value: '-1',
        },
      ],
      isRequire: true,
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
