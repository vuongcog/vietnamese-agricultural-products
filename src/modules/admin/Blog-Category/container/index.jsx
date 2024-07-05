import React, { useState } from "react";
import styles from "./styles.module.scss";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
import DialogCreateForm from "../../../../components/core/DialogCreateForm";
import { schemaFormFactory } from "../utils/schemaFormFactory";
import Status from "../../../../components/admin/Status";
import { exportToExcel } from "../../../../utils/export-excel";
import { Icon } from "@chakra-ui/react";
import { FaFileExcel } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import UpdatedAtComponent from "../../../../components/core/UpdatedAt";
import CreatedAtComponent from "../../../../components/core/CreatedAt";
import { useDispatch } from "react-redux";
import { DELETE_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import useInjectReducerSaga from "../../../../useCustom/admin/useInjectReducerSaga";
import { useTranslation } from "react-i18next";
import langs from "../langs";
const BlogCategory = () => {
  const [selectElement, setSelectElement] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: "",
    },
    endpoint: "/blog/category",
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
        label: t(langs.id),
        default: "N/A",
      },
      {
        name: "name",
        label: t(langs.name),
        default: "N/A",
      },
      {
        name: "slug",
        label: t(langs.slug),
        default: "N/A",
        component: ({ slug }) => {
          return <div>{slug}</div>;
        },
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
                  payload: `/blog/category/${item.id}`,
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
                    endpoint={"/blog/category"}
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
        name: "status",
        label: t(langs.status),
        component: Status,
        default: "N/A",
      },
      {
        name: "created_at",
        label: t(langs.createdAd),
        default: "N/A",
        component: CreatedAtComponent,
      },

      {
        name: "updated_at",
        label: t(langs.updatedAt),
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
export default BlogCategory;
