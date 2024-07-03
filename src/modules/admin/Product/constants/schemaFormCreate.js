import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormCreate = {
  title: "CREATE PRODUCT",
  doneText: ["Cancel", "Save"],
  button: "Create Product",
  type: ADD_DATA,
  schemaForm: [
    {
      name: "id_category",
      label: "id_category",
      placeholder: "id_category",
      endpoint: "http://127.0.0.1:8000/api/category",
      isRequire: true,
      labelField: "category_name",
      valueField: "id",
      type: "select",
    },
    {
      name: "product_name",
      label: "product_name",
      placeholder: "product_name",
      isRequire: true,
      type: "text",
    },
    {
      name: "product_des",
      label: "product_des",
      placeholder: "product_des",
      isRequire: true,
      type: "text",
    },
    {
      name: "product_info",
      label: "product_info",
      placeholder: "product_info",
      isRequire: true,
      type: "text",
    },
    {
      name: "product_image",
      label: "product_image",
      placeholder: "product_image",
      isRequire: true,
      type: "file",
    },
    {
      name: "quantity",
      label: "quantity",
      placeholder: "quantity",
      isRequire: true,
      type: "number",
    },
    {
      name: "unit_prices",
      label: "unit_prices",
      placeholder: "unit_prices",
      isRequire: true,
      type: "number",
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
