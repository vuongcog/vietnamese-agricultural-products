import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import langs from "../langs";

export const schemaFormCreate = {
  title: langs.CREATE_CATEGORY,
  doneText: ["Cancel", "Create"],
  button: langs.createCategory,
  type: ADD_DATA,
  schemaForm: [
    {
      name: "category_name",
      label: langs.name,
      placeholder: langs.name,
      isRequire: true,
      type: "text",
    },
    {
      name: "category_des",
      label: langs.des,
      placeholder: langs.des,
      isRequire: true,
      type: "text",
    },
    {
      name: "status",
      label: langs.status,
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
