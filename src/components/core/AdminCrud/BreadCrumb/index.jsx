import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import SearchInput from '../SearchInput';
import PropTypes from 'prop-types';
import DialogCreateForm from '../../DialogCreateForm';
import { AuthContext } from '../../../../contexts/AuthContext';
import { Button, useDisclosure } from '@chakra-ui/react';
import DialogMessage from '../../DialogMessage';
import FormEmailContainer from '../../FormEmail/container';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_PASSWORD,
  SEND_EMAIL,
  resetEmailStatus,
} from '../Store/constants';
import ProgressFullScreen from '../../ProgressFullScreen';
import {
  getErrorSendMail,
  getIsSendingEmailStatus,
  getSuccessSendMail,
} from '../Store/selector';
import { toast } from 'react-toastify';
import SelectLanguage from '../../../user/Header/SelectLang';
import langs from '../../../../langs';
import { useTranslation } from 'react-i18next';
import SearchWithId from '../SearchWithId';
import { schemaChangePassword } from './constants/schema-form-change-password';
import SortSelector from '../SortSelector';
import {
  CRUD_SET_SORT_BY,
  CRUD_SET_SORT_DIRECTION,
} from '../constants/actionFilter';
const BreadCrumb = ({
  sort = [],
  mode,
  isSearchInput,
  onChangeSearchText,
  searchText,
  schemaForm,
  endpoint,
  sendEmail,
  handleChangeSearchId,
  placeholderSearch,
}) => {
  const { logout } = useContext(AuthContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isOpenCB, onCloseCB, onOpenCB } = useDisclosure();
  const handlerSortChange = (newSortField, sortDirection) => {
    dispatch({ type: CRUD_SET_SORT_BY, payload: newSortField });
    dispatch({ type: CRUD_SET_SORT_DIRECTION, payload: sortDirection });
  };
  const { t } = useTranslation();

  //  * lấy trạng thái của reducer
  const isSendingMail = useSelector(getIsSendingEmailStatus);
  const errorSendMailMessage = useSelector(getErrorSendMail);
  const successSendMailMessage = useSelector(getSuccessSendMail);
  const dispatch = useDispatch();
  const handlerSendmail = data => {
    dispatch({ type: SEND_EMAIL, payload: { ...data, endpoint: '/sendmail' } });
  };

  const handlerChangePassword = data => {
    dispatch({
      type: CHANGE_PASSWORD,
      payload: { ...data, endpoint: '/change/password' },
    });
  };
  useEffect(() => {
    if (errorSendMailMessage) {
      toast.error(`Error: ${errorSendMailMessage}`, {
        position: 'top-right',
        autoClose: 1000,
      });
      dispatch(resetEmailStatus());
    }
  }, [errorSendMailMessage, dispatch]);

  useEffect(() => {
    if (successSendMailMessage) {
      toast.success('Email sent successfully!', {
        position: 'top-right',
        autoClose: 1000,
      });
      dispatch(resetEmailStatus());
    }
  }, [successSendMailMessage, dispatch]);
  return (
    <div className={styles.container}>
      <SortSelector
        extraFields={sort}
        onSortChange={handlerSortChange}
      ></SortSelector>
      {isSendingMail && <ProgressFullScreen />}

      {isSearchInput && (
        <SearchInput
          placeholder={placeholderSearch || t(langs.placeholderSearch)}
          onChangeSearchText={onChangeSearchText}
        />
      )}

      {/* <SearchWithId
        placeholder={t(langs.placeholderId)}
        onChangeSearchText={handleChangeSearchId}
      ></SearchWithId> */}

      {/* {sendEmail && (
        <DialogMessage
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          button={langs.sendmail}
        >
          <FormEmailContainer handlerSubmit={handlerSendmail} />
        </DialogMessage>
      )} */}

      {/* <DialogMessage
        isOpen={isOpenCB}
        onClose={onCloseCB}
        onOpen={onOpenCB}
        button={langs.changePassword}
      >
        <FormEmailContainer
          schemaForm={schemaChangePassword}
          handlerSubmit={handlerChangePassword}
        />
      </DialogMessage> */}

      {mode.create && (
        <DialogCreateForm endpoint={endpoint} schemaForm={schemaForm} />
      )}

      <SelectLanguage classNameProps={styles.customOption}></SelectLanguage>
      <button color={'black'} className={styles.logoutButton} onClick={logout}>
        {t(langs.logout)}
      </button>
    </div>
  );
};

BreadCrumb.propTypes = {
  handleChangeSearchId: PropTypes.func,
  sendEmail: PropTypes.bool,
  schemaForm: PropTypes.object,
  endpoint: PropTypes.string,
  onChangeSearchText: PropTypes.func,
  searchText: PropTypes.string,
  isSearchInput: PropTypes.bool,
};

export default BreadCrumb;
