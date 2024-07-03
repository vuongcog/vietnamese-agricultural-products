import React, { useState } from "react";
import UserName from "../components/UserName";
import styles from "./styles.module.scss";
import UserEmail from "../components/UserEmail";
import formatDateTime from "../../../../utils/formateDateTime";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
import DialogCreateForm from "../../../../components/core/DialogCreateForm";
import { schemaFormFactory } from "../utils/schemaFormFactory";
import { FaFileExcel } from "react-icons/fa"; // Import icon từ react-icons
import { exportToExcel } from "../../../../utils/export-excel";
import { Icon } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import Status from "../../../../components/admin/Status";
import UserPhone from "../components/PhoneNum";
import UserAvatar from "../components/UserAvatar";
import { useDispatch } from "react-redux";
import { DELETE_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import useInjectReducerSaga from "../../../../useCustom/admin/useInjectReducerSaga";
const User = () => {
  const [selectElement, setSelectElement] = useState(null);
  const dispatch = useDispatch();
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
        label: "Title",
        default: "N/A",
      },
      {
        name: "name",
        label: "  Name",
        default: "N/A",
        component: UserName,
      },
      {
        name: "url_avatar",
        label: "Avatar",
        default: "N/A",
        component: UserAvatar,
      },
      {
        name: "email",
        label: "Email",
        default: "N/A",
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
                dispatch({ type: DELETE_DATA, payload: `/user/${item.id}` });
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
        component: UserEmail,
      },
      {
        name: "email_verified_at",
        label: "Email verified at",
        default: "N/A",
      },
      {
        name: "phone_num",
        label: "Phone Num",
        default: "N/A",
        component: UserPhone,
      },
      {
        name: "role",
        label: "Role",
        default: "N/A",
      },
      {
        name: "status",
        label: "Status",
        default: "N/A",
        component: Status,
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

  useInjectReducerSaga();

  return (
    <div className={styles.module}>
      <ContextCrudProvider
        schemaForm={schemaFormFactory("create")}
        {...crudOptions}
        classNameProps={{
          tableBodyRow: styles[`table-body-row`],
          tableHeaderRow: styles[`table-header-row`],
        }}
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
export default User;
