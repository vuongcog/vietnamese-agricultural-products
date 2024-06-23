import React, { useState } from "react";
import styles from "./styles.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminAvatar from "../Avatar";
import { SCHEMA } from "../../../constants/nav-bar-item";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const AdminLeftSidebar = () => {
  const [select, setSelect] = useState(Array(SCHEMA.length).fill(false));
  const [click, setClick] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className={styles.leftSideBar}>
      <div className={styles.wrapperTitle}>
        <i className={`fas fa-paw ${styles.titleIcon}`}></i>
        <h1 className={styles.titleText}>Administrator</h1>
      </div>
      <AdminAvatar />
      <ul className={styles.sidebarMenu}>
        {SCHEMA.map((item, index) => (
          <li
            key={item.name || item.id}
            onClick={() => {
              const newSelect = _.cloneDeep(select);
              newSelect[index] = !select[index];
              setSelect(newSelect);
              setClick(index);
              navigate(item.link);
            }}
            className={`${styles.navbarItem} ${
              click === index && styles.activeSelect
            }`}
          >
            <i className={`${item.icon} ${styles.icon}`}></i>
            <div className={`${item.color} ${styles.label}`}>{item.name}</div>
            <i
              className={`fas fa-chevron-${
                select[index] && click === index ? "down" : "right"
              } ${styles.iconChevron}`}
            ></i>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdminLeftSidebar;
