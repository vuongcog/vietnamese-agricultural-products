import { UPDATE_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormEdit = {
  title: "EDIT BLOG",
  doneText: ["Cancel", "Save"],
  type: UPDATE_DATA,
  schemaForm: [
    {
      name: "id_cat",
      label: "id_cat",
      placeholder: "id_cat",
      endpoint: "http://127.0.0.1:8000/api/category",
      isRequire: true,
      labelField: "category_name",
      valueField: "id",
      type: "select",
    },
    {
      name: "blog_title",
      label: "blog_title",
      placeholder: "blog_title",
      isRequire: true,
      type: "text",
    },
    {
      name: "content",
      label: "content",
      placeholder: "content",
      isRequire: true,
      type: "text",
    },
    {
      name: "blog_image",
      label: "blog_image",
      placeholder: "blog_image",
      type: "file",
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
