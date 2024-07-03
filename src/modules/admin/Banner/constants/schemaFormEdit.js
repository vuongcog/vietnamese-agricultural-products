import { UPDATE_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormEdit = {
  title: "EDIT BANNER",
  doneText: ["Cancel", "Save"],
  type: UPDATE_DATA,
  schemaForm: [
    {
      name: "id_user",
      label: "id_user",
      placeholder: "id_user",
      endpoint: "http://127.0.0.1:8000/api/user",
      isRequire: true,
      labelField: "name",
      valueField: "id",
      type: "select",
    },
    {
      name: "banner_title",
      label: "banner_title",
      placeholder: "banner_title",
      isRequire: true,
      type: "text",
    },
    {
      name: "banner_image",
      label: "banner_image",
      placeholder: "banner_image",
      type: "file",
    },
    {
      name: "banner_des",
      label: "banner_des",
      placeholder: "banner_des",
      isRequire: true,
      type: "text",
    },
    {
      name: "sort",
      label: "sort",
      type: "select",
      items: [
        {
          name: "1",
          value: "1",
        },
        {
          name: "-1",
          value: "-1",
        },
      ],
      placeholder: "status",
      isRequire: true,
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
