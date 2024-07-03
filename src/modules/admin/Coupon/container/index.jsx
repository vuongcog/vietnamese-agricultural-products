import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import formatDateTime from "../../../../utils/formateDateTime";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
import DialogCreateForm from "../../../../components/core/DialogCreateForm";
import { schemaFormFactory } from "../utils/schemaFormFactory";
import {
  ejectReducersAndSagas,
  injectReducersAndSagas,
} from "../../../../components/core/AdminCrud/utils/inject-reducer-saga";
import {
  ejectSaga,
  injectReducer,
} from "../../../../utils/fetch-cancel-saga-reducer-with-key";
import { reducerFilter } from "../../../../components/core/AdminCrud/Store/reducerFilter";
import Status from "../../../../components/admin/Status";
import { exportToExcel } from "../../../../utils/export-excel";
import { Icon } from "@chakra-ui/react";
import { FaFileExcel } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import CreatedAtComponent from "../../../../components/core/CreatedAt";
import UpdatedAtComponent from "../../../../components/core/UpdatedAt";
import CouponCode from "../components/CouponCode";
import CouponDiscount from "../components/CoutponDiscount";
import CouponStartDate from "../components/CouponStartDate";
import CouponEndDate from "../components/CouponEndDate";
import { DELETE_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import { useDispatch } from "react-redux";
const Coupon = () => {
  const [selectElement, setSelectElement] = useState(null);
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: "",
    },
    endpoint: "/coupon",
    mode: {
      breadcrumb: true,
      list: true,
      create: true,
      paging: true,
    },
    search: [
      {
        name: "search",
        label: "Title",
        type: "text",
      },
    ],
    schema: [
      {
        name: "id",
        label: "id",
        default: "N/A",
      },
      {
        name: "coupon_code",
        label: "coupon_code",
        default: "N/A",
        component: CouponCode,
        dropdownActions: {
          items: [
            {
              icon: <i className="font-semibold fa-regular fa-copy"></i>,
              name: "duplicate",
              label: "Duplicaate",
              callback: () => {},
            },
            {
              icon: <i className="text-red-600 fa-regular fa-delete-left"></i>,
              name: "delete",
              label: <span className="text-red-600 font-semibold">Delete</span>,
              callback: (item) => {
                dispatch({
                  type: DELETE_DATA,
                  payload: `/coupon/${item.id}`,
                });
              },
            },
            {
              icon: <Icon color={"green"} as={FaFileExcel} />,
              name: "export-excel",
              label: (
                <span className="text-green-600 font-semibold">
                  Export Excel
                </span>
              ),
              callback: (items, name) => {
                exportToExcel(items, name);
              },
            },
            {
              icon: (
                <i className="text-blue-500 fa-regular fa-pen-to-square"></i>
              ),
              name: "edit",
              label: <span className="text-blue-500 font-semibold">Edit</span>,
              callback: (item) => {
                setSelectElement(
                  <DialogCreateForm
                    item={item}
                    endpoint={"/coupon"}
                    callbackCancel={setSelectElement}
                    title="Update Coupon"
                    schemaForm={schemaFormFactory("edit")}
                  ></DialogCreateForm>
                );
              },
            },
          ],
        },
      },
      {
        name: "discount_value",
        label: "discount_value",
        default: "N/A",
        component: CouponDiscount,
      },
      {
        name: "coupon_start_date",
        label: "coupon_start_date",
        default: "  N/A",
        component: CouponEndDate,
      },
      {
        name: "coupon_end_date",
        label: "coupon_end_date ",
        default: "N/A",
        component: CouponStartDate,
      },
      {
        name: "coupon_quantity",
        label: "coupon_quantity ",
        default: "N/A",
      },
      {
        name: "status",
        label: "status",
        component: Status,
        default: "N/A",
      },
      {
        name: "created_at",
        label: "created_at",
        default: "N/A",
        component: CreatedAtComponent,
      },

      {
        name: "updated_at",
        label: "Updated at",
        default: "N/A",
        component: UpdatedAtComponent,
      },
    ],
    initSearch: true,
  };
  useMemo(() => {
    injectReducersAndSagas();
    injectReducer("crudFilter", reducerFilter);
  }, []);
  useEffect(() => {
    injectReducersAndSagas();
    return () => {
      ejectReducersAndSagas();
      ejectSaga("crudFilter");
    };
  }, []);
  return (
    <div className={styles.module}>
      <ToastContainer containerId={"export-excel"} />
      <ContextCrudProvider
        schemaForm={schemaFormFactory("create")}
        {...crudOptions}
        classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
      >
        {selectElement}
        <AdminCrud
          classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
          {...crudOptions}
        ></AdminCrud>
      </ContextCrudProvider>
    </div>
  );
};
export default Coupon;
