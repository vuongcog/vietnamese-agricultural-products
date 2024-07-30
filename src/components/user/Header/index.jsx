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
import { Link, useNavigate } from 'react-router-dom';
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
import CartNotToken from '../../core/CartNotToken';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const UserHeader = () => {
  const { t } = useTranslation();
  const { accessToken, logout } = useAuth();
  const { dataUser } = useProducerDataUser();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          navigate('/');
        }}
        className={styles.title}
      >
        Trang chủ
      </div>
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

        {!accessToken && (
          <li>
            <Link to={'/authen/signup'} className={styles.navLink}>
              {t(langs.register)}
            </Link>
          </li>
        )}
        {!_.isEmpty(dataUser) && (
          <li>
            <Tooltip placement="top" label={'Profile'} aria-label="Full text">
              <Link to={'/profile'}>
                <div className="border-[1px] rounded-full border-solid border-black">
                  <img
                    className="cursor-pointer w-8 h-8 rounded-full"
                    src={dataUser.url_avatar}
                    alt="profile"
                  />
                </div>
              </Link>
            </Tooltip>
          </li>
        )}
        <li>
          <SelectLanguage width={90} />
        </li>

        <li>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon fontSize={'22'} />}
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
              {accessToken &&
                !_.isEmpty(dataUser) &&
                dataUser.role !== 'customer' && (
                  <MenuItem>
                    <button
                      className={classNames(styles.menuLink, 'italic')}
                      onClick={() => {
                        window.location.replace(import.meta.env.VITE_DOMAIN);
                      }}
                    >
                      <ManageAccountsOutlinedIcon></ManageAccountsOutlinedIcon>
                      {t(langs.management)}
                    </button>
                  </MenuItem>
                )}
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

              {!accessToken && (
                <MenuItem>
                  <Link
                    to={'/authen/signup'}
                    className={classNames(styles.menuLink, 'italic')}
                  >
                    <PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>
                    {t(langs.register)}
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
        <li>
          {Cookies.get('accsessToken') ? (
            <Cart />
          ) : (
            <CartNotToken></CartNotToken>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserHeader;
