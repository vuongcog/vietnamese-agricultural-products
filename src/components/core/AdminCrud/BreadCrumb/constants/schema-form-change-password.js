export const schemaChangePassword = {
  items: [
    {
      name: 'old_password',
      label: 'Mật khẩu cũ',
      placeholder: 'Title...',
      isRequire: true,
      type: 'text',
    },
    {
      name: 'new_password',
      label: 'Mật khẩu mới',
      type: 'text',
      placeholder: 'Email',
      isRequire: true,
    },
    {
      name: 'new_password_confirmation',
      label: 'Xác nhận lại mật khẩu',
      placeholder: 'Message...',
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
