import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormCreate = {
  title: "CREATE CATEGORY",
  doneText: ["Cancel", "Create"],
  button: "Create Category",
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
      name: "category_des",
      label: "category_des",
      placeholder: "category_des",
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
