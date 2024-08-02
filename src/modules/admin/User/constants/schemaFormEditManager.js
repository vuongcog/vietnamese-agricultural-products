import { UPDATE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormEditManager = {
  title: langs.EDIT_USER,
  doneText: ['Cancel', 'Save'],
  type: UPDATE_DATA,
  schemaForm: [
    {
      name: 'status',
      label: langs.status,
      type: 'select',
      items: [
        {
          name: 'active',
          value: 'active',
        },
        {
          name: 'inactive',
          value: 'inactive',
        },
      ],
      isRequire: true,
    },
  ],
};
