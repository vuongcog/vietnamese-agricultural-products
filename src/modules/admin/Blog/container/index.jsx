import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
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
import BlogIcon from "../components/BlogTitle";
import BlogSlug from "../components/BlogSlug";
import BlogContent from "../components/BlogContent";
import { useDispatch } from "react-redux";
import { DELETE_DATA } from "../../../../components/core/AdminCrud/Store/constants";
const Product = () => {
  const [selectElement, setSelectElement] = useState(null);
  const dispatch = useDispatch();
  const crudOptions = {
    endpointParams: {
      q: "",
    },
    endpoint: "/blog",
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
        name: "id_user ",
        label: "id_user ",
        default: "N/A",
      },
      {
        name: "id_cat ",
        label: "id_cat ",
        default: "N/A",
        component: ({ id_cat }) => {
          return <div>{id_cat}</div>;
        },
      },
      {
        name: "blog_title ",
        label: "blog_title ",
        default: "N/A",
        component: BlogIcon,
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
                dispatch({ type: DELETE_DATA, payload: `/blog/${item.id}` });
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
                    endpoint={"/blog"}
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
        name: "blog_slug",
        label: "blog_slug",
        component: BlogSlug,
        default: "N/A",
      },
      {
        name: "content",
        label: "content",
        default: "N/A",
        component: BlogContent,
      },
      {
        name: "blog_image",
        label: "blog_image",
        default: "  N/A",
        component: ({ blog_image }) => {
          return (
            <div className={"flex justify-center"}>
              <img
                className="rounded-full w-[50px] h-[50px] object-cover"
                src={blog_image}
              ></img>
            </div>
          );
        },
      },
      {
        name: "view",
        label: "view",
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
        component: CreatedAtComponent,
        default: "N/A",
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
export default Product;
