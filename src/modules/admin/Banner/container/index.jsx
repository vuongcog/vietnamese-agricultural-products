import React, { useState } from "react";
import styles from "./styles.module.scss";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
import DialogCreateForm from "../../../../components/core/DialogCreateForm";
import { schemaFormFactory } from "../utils/schemaFormFactory";
import Status from "../../../../components/admin/Status";
import { Icon } from "@chakra-ui/react";
import { FaFileExcel } from "react-icons/fa";
import { exportToExcel } from "../../../../utils/export-excel";
import { ToastContainer } from "react-toastify";
import CreatedAtComponent from "../../../../components/core/CreatedAt";
import UpdatedAtComponent from "../../../../components/core/UpdatedAt";
import BannerTitle from "../components/BannerTitle";
import { DELETE_DATA } from "../../../../components/core/AdminCrud/Store/constants";
import { useDispatch } from "react-redux";
import useInjectReducerSaga from "../../../../useCustom/admin/useInjectReducerSaga";
const Category = () => {
  const [selectElement, setSelectElement] = useState(null);
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: "",
    },
    endpoint: "/banner",
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
        name: "id_user",
        label: "id_user",
        default: "N/A",
      },
      {
        name: "banner_title",
        label: "banner_title",
        default: "N/A",
        component: BannerTitle,
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
                  payload: `/banner/${item.id}`,
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
                    endpoint={"/banner"}
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
        name: "banner_image",
        label: "banner_image",
        default: "N/A",
        component: ({ banner_image }) => {
          return (
            <div className="flex justify-center">
              <img
                className="rounded-full object-cover w-[50px] h-[50px]"
                src={banner_image}
              ></img>
            </div>
          );
        },
      },
      {
        name: "banner_des",
        label: "banner_des",
        default: "N/A",
      },
      {
        name: "status",
        label: "status ",
        default: "N/A",
        component: Status,
      },
      {
        name: "sort",
        label: "sort ",
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
export default Category;