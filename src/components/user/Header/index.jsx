import React, { useState } from 'react';
import { SCHEMA } from '../../../constants/user-top-nav-bar-item';
import styles from './styles.module.scss';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import SearchHeader from './SearchHeader';
import Cart from '../../core/Cart';
import SelectLanguage from './SelectLang';
import langs from './langs';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../contexts/AuthContext';
import { useEffect } from 'react';

const UserHeader = () => {
  const { t } = useTranslation();
  const { accessToken, logoutCustomer } = useAuth();
  const [state, setState] = useState(false);
  useEffect(() => {}, state);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Shree</div>
      <SearchHeader />
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Click
      </button>
      <ul className={styles.navList}>
        {SCHEMA.map((item, index) => (
          <li key={index}>
            <Link className={styles.navLink} to={item.link}>
              {t(langs[item.name])}
            </Link>
          </li>
        ))}
        <li>
          <a className={styles.navLink} href="#about">
            {t(langs.about)}
          </a>
        </li>
        {accessToken && (
          <li>
            <button className={styles.navLink} onClick={logoutCustomer}>
              {t(langs.logout)}
            </button>
          </li>
        )}
        {!accessToken && (
          <li>
            <Link
              to={'/authen/signin'}
              className={styles.navLink}
              onClick={() => {}}
            >
              {t(langs.login)}
            </Link>
          </li>
        )}
        <li>
          <SelectLanguage />
        </li>
        <li>
          <Cart />
        </li>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon fontSize={'30px'} color={'green'} />}
            variant="outline"
            className={styles.menuButton}
          />
          <MenuList>
            {SCHEMA.map((item, index) => (
              <MenuItem key={index}>
                <Link className={styles.menuLink} to={item.link}>
                  {item.name}
                </Link>
              </MenuItem>
            ))}
            <MenuItem>
              <a className={styles.menuLink} href="#about">
                About
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </ul>
    </div>
  );
};

export default UserHeader;
