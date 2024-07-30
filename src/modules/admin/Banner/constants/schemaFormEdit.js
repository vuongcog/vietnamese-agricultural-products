import { UPDATE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormEdit = {
  title: langs.EDIT_BANNER,
  doneText: ['Cancel', 'Save'],
  type: UPDATE_DATA,
  schemaForm: [
    {
      name: 'banner_title',
      label: langs.title,
      placeholder: langs.title,
      isRequire: true,
      type: 'text',
    },

    {
      name: 'banner_des',
      label: langs.des,
      placeholder: langs.des,
      isRequire: true,
      type: 'editor',
    },
    {
      name: 'banner_image',
      label: langs.image,
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
