import { ADD_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import langs from "../langs";

export const schemaFormCreate = {
  title: langs.CREATE_COUPON,
  doneText: ["Cancel", "Create"],
  button: langs.createCoupon,
  type: ADD_DATA,
  schemaForm: [
    {
      name: "discount_value",
      label: langs.discountValue,
      placeholder: langs.discountValue,
      isRequire: true,
      type: "text",
    },
    {
      name: "coupon_start_date",
      label: langs.startDate,
      placeholder: langs.startDate,
      isRequire: true,
      type: "date",
    },
    {
      name: "coupon_end_date",
      label: langs.endDate,
      placeholder: langs.endDate,
      isRequire: true,
      type: "date",
    },
    {
      name: "coupon_quantity",
      label: langs.quantity,
      placeholder: langs.quantity,
      isRequire: true,
      type: "number",
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
