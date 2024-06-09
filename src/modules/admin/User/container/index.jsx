import React from "react";
import CrudList from "../../../../components/core/AdminCrud/CrudList/index";
import UserName from "../components/UserName";
import styles from "./styles.module.scss";
import UserEmail from "../components/UserEmail";
import formatDateTime from "../../../../utils/formateDateTime";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
const User = () => {
  const crudOptions = {
    endpointParams: {
      q: "",
    },
    endpoint: "/search",
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
        label: "Id",
        default: "N/A",
        className: "w-[5%] text-start  text-[var(--theme-light-red)]",
      },
      {
        name: "name",
        label: "Name",
        default: "N/A",
        component: UserName,
        className: "w-[30%]  text-start text-[var(--theme-light-orange)]",
      },
      {
        name: "email",
        label: "Email",
        default: "N/A",
        className: "w-[10%] text-start text-[var(--theme-yellow)] ",
        component: UserEmail,
      },
      {
        name: "email_verified_at",
        label: "Email verified at",
        className: "text-center text-[var(--theme-light-yellow)]",
        default: "N/A",
      },
      {
        name: "created_at",
        label: "Created at",
        formatDate: formatDateTime,
        default: "N/A",
        className: "text-start text-[var(--theme-green)]",
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
  return (
    <div className={styles.module}>
      <ContextCrudProvider
        {...crudOptions}
        classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
      >
        <AdminCrud
          classNameProps={{ tableBodyRow: styles[`table-body-row`] }}
          {...crudOptions}
        ></AdminCrud>
      </ContextCrudProvider>
    </div>
  );
};

export default User;
