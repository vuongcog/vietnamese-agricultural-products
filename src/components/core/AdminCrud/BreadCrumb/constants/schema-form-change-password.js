export const schemaChangePassword = {
  items: [
    {
      name: 'old_password',
      label: 'Mật khẩu cũ',
      placeholder: 'Mật khẩu cũ',
      isRequire: true,
      type: 'text',
    },
    {
      name: 'new_password',
      label: 'Mật khẩu mới',
      type: 'text',
      placeholder: 'Mật khẩu mới...',
      isRequire: true,
    },
    {
      name: 'new_password_confirmation',
      label: 'Xác nhận lại mật khẩu',
      placeholder: 'Xác nhận lại mật khẩu',
      isRequire: true,
      type: 'text',
    },
  ],
  doneText: [
    {
      label: 'Đổi mật khẩu',
      name: 'name',
      callback: () => {},
    },
  ],
};
