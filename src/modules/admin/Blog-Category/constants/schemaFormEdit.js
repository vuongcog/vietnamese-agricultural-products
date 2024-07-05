import { UPDATE_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import langs from "../langs";

export const schemaFormEdit = {
  title: langs.EDIT_BLOG_CATEGORY,
  doneText: ["Cancel", "Save"],
  type: UPDATE_DATA,
  schemaForm: [
    {
      name: "name",
      label: langs.name,
      placeholder: langs.name,
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
