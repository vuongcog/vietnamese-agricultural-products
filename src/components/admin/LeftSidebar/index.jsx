import React, { useState } from 'react';
import styles from './styles.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminAvatar from '../Avatar';
import { SCHEMA } from '../../../constants/nav-bar-item';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import useProducerDataUser from '../../../useCustom/admin/useProducerDataUser';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SecurityIcon from '@mui/icons-material/Security';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const AdminLeftSidebar = () => {
  const MapperIcon = {
    manager: <ManageAccountsIcon className={styles.titleIcon} />,
    admin: <SecurityIcon className={styles.titleIcon} />,
    staff: <WorkOutlineIcon className={styles.titleIcon} />,
  };

  const navigate = useNavigate();
  const location = useLocation();
  const { inforUser } = useProducerDataUser();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const { t } = useTranslation();
  const handleNavigate = link => {
    setActiveLink(`${link}`);
    navigate(`${link}`);
  };
  const IconUser = MapperIcon[inforUser?.role];

  return (
    <nav className={classNames(styles.leftSideBar)}>
      <div className={styles.wrapperTitle}>
        {IconUser}
        <h1 className={styles.titleText}>{inforUser.role}</h1>
      </div>
      <AdminAvatar />
      <ul className={styles.sidebarMenu}>
        {SCHEMA.map(item => (
          <li
            key={item.name || item.id}
            onClick={() => handleNavigate(item.link)}
            className={`${styles.navbarItem} ${
              activeLink === item.link ? styles.active : ''
            }`}
          >
            <item.icon></item.icon>
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
