import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormCreate = {
  title: "Create User",
  doneText: ["Cancel", "Save"],
  button: "Create User",
  type: ADD_DATA,
  schemaForm: [
    {
      name: "name",
      label: "Name",
      placeholder: "Name",
      isRequire: true,
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
      isRequire: true,
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      placeholder: "Password",
      isRequire: true,
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      items: [
        { value: "admin", name: "admin" },
        { value: "customer", name: "Customer" },
        { value: "staff", name: "Staff" },
        { value: "manager", name: "Manager" },
      ],
      placeholder: "Role",
      isRequire: true,
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Address",
      isRequire: true,
    },
    {
      name: "phone_num",
      label: "Phone Number",
      type: "number",
      placeholder: "Phone Number",
      isRequire: true,
    },
    {
      name: "avatar",
      label: "Avatar",
      type: "file",
      placeholder: "Avatar",
      isRequire: true,
    },
    {
      name: "status",
      label: "Status",
      type: "text",
      placeholder: "Status",
      isRequire: true,
    },
  ],
};
