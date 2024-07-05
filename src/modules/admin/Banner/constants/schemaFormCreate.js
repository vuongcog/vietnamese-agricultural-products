import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import langs from "../langs";

export const schemaFormCreate = {
  title: langs.CREATE_BANNER,
  doneText: ["Cancel", "Save"],
  button: langs.createBanner,
  type: ADD_DATA,
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
      isRequire: true,
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
