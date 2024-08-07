import { ADD_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormCreate = {
  title: langs.CREATE_USER,
  doneText: ['Cancel', 'Save'],
  button: langs.createUser,
  type: ADD_DATA,
  schemaForm: [
    {
      name: 'name',
      label: langs.name,
      placeholder: 'Name',
      isRequire: true,
      type: 'text',
    },
    {
      name: 'email',
      label: langs.email,
      type: 'email',
      placeholder: 'Email',
      isRequire: true,
      minLength: 11,
      maxLength: 255,
    },
    {
      name: 'password',
      label: langs.password,
      type: 'text',
      placeholder: langs.password,
      isRequire: true,
      minLength: 8,
      maxLength: 255,
    },
    {
      name: 'role',
      label: langs.role,
      type: 'select',
      items: [
        { value: 'manager', name: 'Manager' },
        { value: 'staff', name: 'Staff' },
        { value: 'customer', name: 'Customer' },
      ],
      placeholder: 'Role',
      isRequire: true,
    },
    {
      name: 'address',
      label: langs.address,
      type: 'text',
      placeholder: 'Address',
      // isRequire: true,
    },
    {
      name: 'phone_num',
      label: langs.phoneNum,
      type: 'number',
      placeholder: 'Phone Number',
      // isRequire: true,
    },
    {
      name: 'avatar',
      label: langs.avatar,
      type: 'file',
      placeholder: 'Avatar',
      // isRequire: true,
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
