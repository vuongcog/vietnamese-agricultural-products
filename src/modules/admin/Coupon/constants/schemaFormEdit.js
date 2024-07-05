import { UPDATE_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import langs from "../langs";

export const schemaFormEdit = {
  title: langs.EDIT_COUPON,
  doneText: ["Cancel", "Create"],
  type: UPDATE_DATA,
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
      type: "date",
    },
    {
      name: "coupon_end_date",
      label: langs.endDate,
      placeholder: langs.endDate,
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
