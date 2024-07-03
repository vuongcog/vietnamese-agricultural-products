import React, { useState } from "react";
import styles from "./styles.module.scss";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
import DialogCreateForm from "../../../../components/core/DialogCreateForm";
import { schemaFormFactory } from "../utils/schemaFormFactory";
import {} from "../../../../components/core/AdminCrud/utils/inject-reducer-saga";
import ProductDes from "../components/ProductDes";
import {} from "../../../../utils/fetch-cancel-saga-reducer-with-key";
import ProductName from "../components/ProductName";
import Status from "../../../../components/admin/Status";
import ProductInfo from "../components/ProductInfo";
import ProductUnitPrice from "../components/ProductUnitPrice";
import { exportToExcel } from "../../../../utils/export-excel";
import { Icon } from "@chakra-ui/react";
import { FaFileExcel } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import ProductSlug from "../components/ProductSlug";
import ProductImage from "../components/ProductImage";
import CreatedAtComponent from "../../../../components/core/CreatedAt";
import UpdatedAtComponent from "../../../../components/core/UpdatedAt";
import { useDispatch } from "react-redux";
import { DELETE_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import useInjectReducerSaga from "../../../../useCustom/admin/useInjectReducerSaga";
const Product = () => {
  const [selectElement, setSelectElement] = useState(null);
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: "",
    },
    endpoint: "/product",
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
        name: "product_name",
        label: "product_name",
        default: "N/A",
        component: ProductName,
        dropdownActions: {
          items: [
            {
              icon: <i className="fa-regular fa-copy"></i>,
              name: "duplicate",
              label: <span className="font-semibold">Duplicate</span>,
              callback: () => {},
            },
            {
              icon: <i className="text-red-600 fa-regular fa-delete-left"></i>,
              name: "delete",
              label: <span className="text-red-600 font-semibold">Delete</span>,
              callback: (item) => {
                dispatch({ type: DELETE_DATA, payload: `/product/${item.id}` });
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
                    endpoint={"/product"}
                    callbackCancel={setSelectElement}
                    title="Update User"
                    schemaForm={schemaFormFactory("edit")}
                  ></DialogCreateForm>
                );
              },
            },
          ],
        },
      },

      {
        name: "product_slug",
        label: "product_slug",
        default: "N/A",
        component: ProductSlug,
      },
      {
        name: "product_image",
        label: "product_image",
        default: "  N/A",
        component: ProductImage,
      },
      {
        name: "product_des",
        label: "product_des ",
        component: ProductDes,
        default: "N/A",
      },
      {
        name: "product_info",
        label: "product_ino ",
        component: ProductInfo,
        default: "N/A",
      },
      {
        name: "quantity",
        label: "quantity ",
        default: "N/A",
      },
      {
        name: "unit_prices",
        label: "unit_prices",
        component: ProductUnitPrice,
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

  useInjectReducerSaga();

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
export default Product;
