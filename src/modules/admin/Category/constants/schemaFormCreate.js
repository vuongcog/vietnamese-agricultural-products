import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormCreate = {
  title: "Create User",
  doneText: ["Cancel", "Save"],
  button: "Create User",
  type: ADD_DATA,
  schemaForm: [
    {
      name: "category_name",
      label: "category_name",
      placeholder: "category_name",
      isRequire: true,
      type: "text",
    },
    {
      name: "status",
      label: "status",
      type: "select",
      items: [
        {
          name: "inactive",
          value: "inactive",
        },
        {
          name: "active",
          value: "active",
        },
      ],
      placeholder: "status",
      isRequire: true,
    },
  ],
};
