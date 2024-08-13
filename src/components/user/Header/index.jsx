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
import { PersonOutline } from '@mui/icons-material';
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
import logo from './crate_5919706.png';
import './styles.scss';
const UserHeader = () => {
  const { t } = useTranslation();
  const { accessToken, logout } = useAuth();
  const { dataUser } = useProducerDataUser();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div
        className={classNames(
          'flex items-center gap-5',
          styles[`left-content`]
        )}
      >
        <div
          onClick={() => {
            navigate('/');
          }}
          className={styles.title}
        >
          NSSK
        </div>
        <img
          className="w-16 cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
          src={logo}
        ></img>
        <SearchHeader />
        <div>
          {Cookies.get('accsessToken') ? (
            <Cart />
          ) : (
            <CartNotToken></CartNotToken>
          )}
        </div>
      </div>

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

        <li className="li-select-lang">
          <SelectLanguage fontWeight={100} width={120} />
        </li>
      </ul>
      <ul className={styles[`nav-opitons`]}>
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
        {!_.isEmpty(dataUser) && (
          <li className={styles.profile}>
            <Tooltip placement="top" label={'Profile'} aria-label="Full text">
              <Link to={'/profile'}>
                <div>
                  <PersonOutline
                    className="font-bold"
                    color="blue"
                    fontSize="large"
                    style={{ fontWeight: 'bold' }}
                  ></PersonOutline>
                </div>
              </Link>
            </Tooltip>
          </li>
        )}
      </ul>
    </div>
  );
};

export default UserHeader;
