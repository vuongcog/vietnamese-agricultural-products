import { UPDATE_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormEdit = {
  title: "EDIT BLOG CATEGORY",
  doneText: ["Cancel", "Save"],
  type: UPDATE_DATA,
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
