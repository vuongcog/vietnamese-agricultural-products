import React from "react";
import UserName from "../components/UserName";
import styles from "./styles.module.scss";
import UserEmail from "../components/UserEmail";
import formatDateTime from "../../../../utils/formateDateTime";
import AdminCrud from "../../../../components/core/AdminCrud";
import ContextCrudProvider from "../../../../components/core/AdminCrud/CrudContext/CrudContext";
import { cancelSaga, runSaga } from "../../../../utils/saga/optionsSaga";
import { useDispatch, useSelector } from "react-redux";
import fetchUser, { watchFetchTest } from "../store/saga";
const Test = () => {
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
        className: "w-[5%] text-start  text-[var(--theme-light-red)]",
      },
      {
        name: "name",
        label: "  Name",
        default: "N/A",
        component: UserName,
        className: "w-[30%]  text-start text-[var(--theme-light-orange)]",
      },
      {
        name: "email",
        label: "Email",
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
              callBack: () => {},
            },
          ],
        },
        component: UserEmail,
      },
      {
        name: "email_verified_at",
        label: "Email verified at",
        className: "text-center text-[var(--theme-light-yellow)]",
        default: "N/A",
      },
      {
        name: "phone_num",
        label: "Phone Num",
        default: "N/A",
        className: "text-start text-[var(--theme-green)]",
      },
      {
        name: "role",
        label: "Updated at",
        default: "N/A",
        className: "text-end text-[var(--theme-light-blue)]",
      },
      {
        name: "status",
        label: "Status",
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
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);
  // const error = useSelector((state) => state.user.error);

  const startSaga = () => {
    runSaga(fetchUser, "fetchUserSaga");
    runSaga(watchFetchTest, "fetchTestUserSaga");
    dispatch({ type: "FETCH_USER_REQUEST" });
  };

  const stopSaga = () => {
    cancelSaga("fetchUserSaga");
  };
  return (
    <div className={styles.module}>
      <button
        className="text-white"
        onClick={() => {
          dispatch({ type: "FETCH_USER_REQUEST" });
        }}
      >
        Click
      </button>
      <button className="text-white" onClick={startSaga}>
        Start Fetch User Saga
      </button>
      <button className="text-white" onClick={stopSaga}>
        Stop Fetch User Saga
      </button>

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
export default Test;
