import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import langs from "../langs";

export const schemaFormCreate = {
  title: "Create User",
  doneText: ["Cancel", "Save"],
  button: "Create User",
  type: ADD_DATA,
  schemaForm: [
    {
      name: "name",
      label: langs.name,
      placeholder: "Name",
      isRequire: true,
      type: "text",
    },
    {
      name: "email",
      label: langs.email,
      type: "email",
      placeholder: "Email",
      isRequire: true,
    },
    {
      name: "password",
      label: langs.password,
      type: "text",
      placeholder: langs.password,
      isRequire: true,
    },
    {
      name: "role",
      label: langs.role,
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
      label: langs.address,
      type: "text",
      placeholder: "Address",
      isRequire: true,
    },
    {
      name: "phone_num",
      label: langs.phoneNum,
      type: "number",
      placeholder: "Phone Number",
      isRequire: true,
    },
    {
      name: "avatar",
      label: langs.avatar,
      type: "file",
      placeholder: "Avatar",
      isRequire: true,
    },
    {
      name: "status",
      label: langs.status,
      type: "text",
      placeholder: "Status",
      isRequire: true,
    },
  ],
};
