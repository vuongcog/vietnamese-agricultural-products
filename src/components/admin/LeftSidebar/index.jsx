import React, { useState } from "react";
import styles from "./styles.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AddminAvatar from "../Avatar";
import { SCHEMA } from "../../../constants/left-side-bar";
import _ from "lodash";

const AdminLeftSidebar = () => {
  const [select, setSelect] = useState(Array(SCHEMA.length).fill(false));
  console.log(select);
  return (
    <nav className={styles[`left-side-bar`]}>
      <div className={styles.wrappertTitle}>
        <i className={`fas fa-paw ${styles.title}`}></i>
        <h1 className="text-center text-[24px] text-white">Administrator</h1>
      </div>

      <AddminAvatar></AddminAvatar>
      <ul className={styles[`sidebar-menu`]}>
        {SCHEMA.map((item, index) => {
          return (
            <li
              onClick={() => {
                const newSelect = _.cloneDeep(select);
                newSelect[index] = !select[index];
                setSelect(newSelect);
              }}
              className={styles[`navbar-item`]}
              key={index}
            >
              <div className={styles.label}>{item.name}</div>
              {select[index] ? (
                <i
                  className={`fas fa-chevron-down ${styles[`icon-chevron`]}`}
                ></i>
              ) : (
                <i
                  className={`fas fa-chevron-right ${styles[`icon-chevron`]}`}
                ></i>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default AdminLeftSidebar;
