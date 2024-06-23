import React, { useEffect, useMemo, useState } from "react";
import UserName from "../components/UserName";
import styles from "./styles.module.scss";
import UserEmail from "../components/UserEmail";
import formatDateTime from "../../../../utils/formateDateTime";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
import DialogCreateForm from "../../../../components/core/DialogCreateForm";
import { schemaFormFactory } from "../utils/schemaFormFactory";
import {
  ejectReducersAndSagas,
  injectReducersAndSagas,
} from "../../../../components/core/AdminCrud/utils/inject-reducer-saga";
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
        label: "id",
        default: "N/A",
        className: "w-[5%] text-start  text-[var(--theme-light-red)]",
      },
      {
        name: "id_category",
        label: "id_category",
        default: "N/A",
        className: "w-[30%]  text-start text-[var(--theme-light-orange)]",
      },
      {
        name: "product_name",
        label: "product_name",
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
              icon: <i className="fa-regular fa-pen-to-square"></i>,
              name: "edit",
              label: "Edit",
              callback: (item) => {
                console.log(item);
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
        // component: UserEmail,
      },
      {
        name: "product_slug",
        label: "product_slug",
        className: "text-center text-[var(--theme-light-yellow)]",
        default: "N/A",
      },
      {
        name: "product_image",
        label: "product_image",
        default: "  N/A",
        className: "text-start text-[var(--theme-green)]",
      },
      {
        name: "product_des",
        label: "product_des ",
        default: "N/A",
        className: "text-end text-[var(--theme-light-blue)]",
      },
      {
        name: "created_at",
        label: "created_at",
        formatDate: formatDateTime,
        default: "N/A",
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
        <AdminCrud
          classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
          {...crudOptions}
        ></AdminCrud>
      </ContextCrudProvider>
    </div>
  );
};
export default Product;
