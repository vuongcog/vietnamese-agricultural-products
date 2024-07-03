import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormCreate = {
  title: "CREATE BLOG CATEGORY",
  doneText: ["Cancel", "Create"],
  button: "Create Blog Category",
  type: ADD_DATA,
  schemaForm: [
    {
      name: "name",
      label: "name",
      placeholder: "name",
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
