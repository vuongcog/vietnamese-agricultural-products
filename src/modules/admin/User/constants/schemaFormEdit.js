import { UPDATE_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormEdit = {
  title: langs.EDIT_USER,
  doneText: ['Cancel', 'Save'],
  type: UPDATE_DATA,
  schemaForm: [
    {
      name: 'name',
      label: langs.name,
      placeholder: 'Name',
      isRequire: true,
      type: 'text',
      minLength: 5,
      maxLength: 255,
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
    // {
    //   name: "password",
    //   label: "Password",
    //   type: "text",
    //   placeholder: "Password",
    //   isRequire: true,
    // },
    {
      name: 'role',
      label: langs.role,
      type: 'select',
      items: [
        { value: 'admin', name: 'admin' },
        { value: 'customer', name: 'Customer' },
        { value: 'staff', name: 'Staff' },
        { value: 'manager', name: 'Manager' },
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
      max: 9999999999,
    },
    {
      name: 'avatar',
      label: langs.avatar,
      type: 'file',
      placeholder: 'Avatar',
    },
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
