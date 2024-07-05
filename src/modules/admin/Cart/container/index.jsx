import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import formatDateTime from "../../../../utils/formateDateTime";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
import DialogCreateForm from "../../../../components/core/DialogCreateForm";
import { schemaFormFactory } from "../utils/schemaFormFactory";
import { FaFileExcel } from "react-icons/fa"; // Import icon từ react-icons
import {
  ejectReducersAndSagas,
  injectReducersAndSagas,
} from "../../../../components/core/AdminCrud/utils/inject-reducer-saga";
import { exportToExcel } from "../../../../utils/export-excel";
import { Icon } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
const Cart = () => {
  const [selectElement, setSelectElement] = useState(null);
  const crudOptions = {
    endpointParams: {
      q: "",
    },
    endpoint: "/user",
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
        className: "w-[5%] text-start  text-[var(--theme-light-red)]",
      },
      {
        name: "id_user ",
        label: "id_user ",
        default: "N/A",
        className: "w-[30%]  text-start text-[var(--theme-light-orange)]",
      },
      {
        name: "cart_total",
        label: "cart_total",
        default: "N/A",
        className: "w-[20%] text-start text-[var(--theme-yellow)] ",
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
                console.log(item);
                setSelectElement(
                  <DialogCreateForm
                    item={item}
                    endpoint={"/user"}
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
        name: "created_at",
        label: "created_at",
        default: "N/A",
        formatDate: formatDateTime,
        className: "text-end text-[var(--theme-light-blue)]",
      },
      {
        name: "updated_at",
        label: "Updated at",
        default: "N/A",
        formatDate: formatDateTime,
        className: "text-end text-[var(--theme-light-blue)]",
      },
    ],
    initSearch: true,
  };

  useMemo(() => {
    injectReducersAndSagas();
  }, []);
  useEffect(() => {
    injectReducersAndSagas();
    return () => {
      console.log("eject");
      ejectReducersAndSagas();
    };
  }, []);
  return (
    <div className={styles.module}>
      <ContextCrudProvider
        schemaForm={schemaFormFactory("create")}
        {...crudOptions}
        classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
      >
        {selectElement}
        <ToastContainer containerId={"export-excel"} />
        <AdminCrud
          classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
          {...crudOptions}
        ></AdminCrud>
      </ContextCrudProvider>
    </div>
  );
};
export default Cart;