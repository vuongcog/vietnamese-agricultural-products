import React, { useState } from "react";
import styles from "./styles.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminAvatar from "../Avatar";
import { SCHEMA } from "../../../constants/nav-bar-item";
import { useNavigate, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const AdminLeftSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const { t } = useTranslation();
  const handleNavigate = (link) => {
    setActiveLink(link);
    navigate(link);
  };

  return (
    <nav className={classNames(styles.leftSideBar)}>
      <div className={styles.wrapperTitle}>
        <i className={`fas fa-paw ${styles.titleIcon}`}></i>
        <h1 className={styles.titleText}>Administrator</h1>
      </div>
      <AdminAvatar />
      <ul className={styles.sidebarMenu}>
        {SCHEMA.map((item) => (
          <li
            key={item.name || item.id}
            onClick={() => handleNavigate(item.link)}
            className={`${styles.navbarItem} ${
              activeLink === item.link ? styles.active : ""
            }`}
          >
            <i className={`${item.icon} ${styles.icon}`}></i>
            <div className={`${item.color} ${styles.label}`}>
              {t(item.name)}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdminLeftSidebar;
