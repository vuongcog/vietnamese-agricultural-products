import React from 'react';
import { SCHEMA } from '../../../constants/user-top-nav-bar-item';
import styles from './styles.module.scss';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import SearchHeader from './SearchHeader';
import Cart from '../../core/Cart';
import SelectLanguage from './SelectLang';
import langs from './langs';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../contexts/AuthContext';
import useProducerDataUser from '../../../useCustom/user/useProducerDataUser';

const UserHeader = () => {
  const { t } = useTranslation();
  const { dataUser } = useProducerDataUser();

  const { accessToken, logout } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Shree</div>
      <SearchHeader />
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
            <button className={styles.navLink} onClick={logout}>
              {t(langs.logout)}
            </button>
          </li>
        )}
        {!accessToken && (
          <li>
            <Link to={'/authen/signin'} className={styles.navLink}>
              {t(langs.login)}
            </Link>
          </li>
        )}
        {dataUser && dataUser.role !== 'customer' && (
          <li>
            <button
              onClick={() => {
                window.location.replace(import.meta.env.VITE_DOMAIN); // Thay đổi URL này thành URL đúng của bạn
              }}
            >
              {t(langs.management)}
            </button>
          </li>
        )}
        <li>
          <SelectLanguage />
        </li>

        {!_.isEmpty(dataUser) && (
          <li>
            <Tooltip placement="top" label={'Profile'} aria-label="Full text">
              <Link to={'/profile'}>
                <img
                  className="cursor-pointer w-12 h-12 rounded-full"
                  src={dataUser.url_avatar}
                  alt="profile"
                />
              </Link>
            </Tooltip>
          </li>
        )}
        <li>
          <Cart />
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  );
};

export default UserHeader;
