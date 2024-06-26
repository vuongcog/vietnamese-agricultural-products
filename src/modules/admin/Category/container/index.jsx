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
import { components } from "react-select";
const Category = () => {
  const [selectElement, setSelectElement] = useState(null);

  const crudOptions = {
    endpointParams: {
      q: "",
    },
    endpoint: "/category",
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
        label: "Title",
        default: "N/A",
        className: "w-[5%] text-start  text-[var(--theme-light-red)]",
      },
      {
        name: "category_name",
        label: "  Category Name",
        default: "N/A",
        // component: UserName,
        className: "w-[30%]  text-start text-[var(--theme-light-orange)]",
      },
      {
        name: "category_slug",
        label: "category_slug",
        default: "N/A",
        className: "w-[20%] text-start text-[var(--theme-yellow)] ",
        component: ({ category_slug }) => {
          return <div>{category_slug}</div>;
        },
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
                    endpoint={"/category"}
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
        name: "category_des",
        label: "category_des",
        className: "text-center text-[var(--theme-light-yellow)]",
        default: "N/A",
      },
      {
        name: "phone_num",
        label: "Phone Num",
        default: "  N/A",
        className: "text-start text-[var(--theme-green)]",
      },
      {
        name: "status",
        label: "status ",
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
        // formatDate: formatDateTime,
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
export default Category;
