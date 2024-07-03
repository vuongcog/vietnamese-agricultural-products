import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";

export const schemaFormCreate = {
  title: "CREATE COUPON",
  doneText: ["Cancel", "Create"],
  button: "Create Coupon",
  type: ADD_DATA,
  schemaForm: [
    {
      name: "discount_value",
      label: "discount_value",
      placeholder: "discount_value",
      isRequire: true,
      type: "text",
    },
    {
      name: "coupon_start_date",
      label: "coupon_start_date",
      placeholder: "coupon_start_date",
      isRequire: true,
      type: "date",
    },
    {
      name: "coupon_end_date",
      label: "coupon_end_date",
      placeholder: "coupon_end_date",
      isRequire: true,
      type: "date",
    },
    {
      name: "coupon_quantity",
      label: "coupon_quantity",
      placeholder: "coupon_quantity",
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
