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
import ProductDes from "../components/ProductDes";
import {
  ejectSaga,
  injectReducer,
} from "../../../../utils/fetch-cancel-saga-reducer-with-key";
import { reducerFilter } from "../../../../components/core/AdminCrud/Store/reducerFilter";
import ProductName from "../components/ProductName";
import Status from "../../../../components/admin/Status";
import ProductInfo from "../components/ProductInfo";
import ProductUnitPrice from "../components/ProductUnitPrice";
import { exportToExcel } from "../../../../utils/export-excel";
import { Icon } from "@chakra-ui/react";
import { FaFileExcel } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
const Product = () => {
  const [selectElement, setSelectElement] = useState(null);

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
        label: "#",
        default: "N/A",
      },
      {
        name: "product_image",
        label: "product_image",
        default: "  N/A",
        component: ({ product_image }) => {
          return (
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-[50px] h-[50px] object-cover"
                src={product_image}
              ></img>
            </div>
          );
        },
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
              label: "Duplicaate",
              callback: () => {},
            },
            {
              icon: <i className="fa-regular fa-delete-left"></i>,
              name: "delete",
              label: "Delete",
              callback: () => {},
            },
            {
              icon: <Icon as={FaFileExcel} />,
              name: "export-excel",
              label: "Export Excel",
              callback: (items, name) => {
                exportToExcel(items, name);
              },
            },
            {
              icon: <i className="fa-regular fa-pen-to-square"></i>,
              name: "edit",
              label: "Edit",
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
        label: "quantity",
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
        formatDate: formatDateTime,
        default: "N/A",
      },

      {
        name: "updated_at",
        label: "Updated at",
        default: "N/A",
        formatDate: formatDateTime,
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
        classNameProps={{
          tableBodyRow: styles[`table-body-row`],
          tableHeaderRow: styles[`table-header-row`],
        }}
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
