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
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import classNames from 'classnames';

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
        <li>
          <SelectLanguage width={90} />
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
                  <Link
                    className={classNames(styles.menuLink, 'italic')}
                    to={item.link}
                  >
                    <item.icon></item.icon>
                    {t(langs[item.name])}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                {dataUser && dataUser.role !== 'customer' && (
                  <button
                    className={classNames(styles.menuLink, 'italic')}
                    onClick={() => {
                      window.location.replace(import.meta.env.VITE_DOMAIN); // Thay đổi URL này thành URL đúng của bạn
                    }}
                  >
                    <ManageAccountsOutlinedIcon></ManageAccountsOutlinedIcon>
                    {t(langs.management)}
                  </button>
                )}
              </MenuItem>
              {!accessToken && (
                <MenuItem>
                  <Link
                    to={'/authen/signin'}
                    className={classNames(styles.menuLink, 'italic')}
                  >
                    <LoginOutlinedIcon></LoginOutlinedIcon>
                    {t(langs.login)}
                  </Link>
                </MenuItem>
              )}
              {accessToken && (
                <MenuItem>
                  <button
                    className={classNames(styles.menuLink, 'italic')}
                    onClick={logout}
                  >
                    <LogoutOutlinedIcon></LogoutOutlinedIcon>
                    {t(langs.logout)}
                  </button>
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </li>
      </ul>
    </div>
  );
};

export default UserHeader;
