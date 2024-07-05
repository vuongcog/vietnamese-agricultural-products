import React, { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import SearchInput from "../SearchInput";
import PropTypes from "prop-types";
import DialogCreateForm from "../../DialogCreateForm";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Button, useDisclosure } from "@chakra-ui/react";
import DialogMessage from "../../DialogMessage";
import FormEmailContainer from "../../FormEmail/container";
import { useDispatch, useSelector } from "react-redux";
import { SEND_EMAIL, resetEmailStatus } from "../Store/constants";
import ProgressFullScreen from "../../ProgressFullScreen";
import {
  getErrorSendMail,
  getIsSendingEmailStatus,
  getSuccessSendMail,
} from "../Store/selector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectLanguage from "../../../user/Header/SelectLang";

const BreadCrumb = ({
  isSearchInput,
  onChangeSearchText,
  searchText,
  schemaForm,
  endpoint,
  sendEmail,
}) => {
  const { logout } = useContext(AuthContext);
  const { isOpen, onClose, onOpen } = useDisclosure();

  //  * lấy trạng thái của reducer
  const isSendingMail = useSelector(getIsSendingEmailStatus);
  const errorSendMailMessage = useSelector(getErrorSendMail);
  const successSendMailMessage = useSelector(getSuccessSendMail);

  const dispatch = useDispatch();
  const handlerSendmail = (data) => {
    dispatch({ type: SEND_EMAIL, payload: { ...data, endpoint: "/sendmail" } });
  };

  useEffect(() => {
    if (errorSendMailMessage) {
      toast.error(`Error: ${errorSendMailMessage}`, {
        position: "top-right",
        autoClose: 1000,
      });
      dispatch(resetEmailStatus());
    }
  }, [errorSendMailMessage, dispatch]);

  useEffect(() => {
    if (successSendMailMessage) {
      toast.success("Email sent successfully!", {
        position: "top-right",
        autoClose: 1000,
      });
      dispatch(resetEmailStatus());
    }
  }, [successSendMailMessage, dispatch]);

  return (
    <div className={styles.container}>
      <ToastContainer />
      {isSendingMail && <ProgressFullScreen />}
      {isSearchInput && (
        <SearchInput
          onChangeSearchText={onChangeSearchText}
          searchText={searchText}
        />
      )}
      {sendEmail && (
        <DialogMessage
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          button={"Send Mail"}
        >
          <FormEmailContainer handlerSubmit={handlerSendmail} />
        </DialogMessage>
      )}
      <DialogCreateForm endpoint={endpoint} schemaForm={schemaForm} />
      <Button className={styles.logoutButton} onClick={logout}>
        Logout
      </Button>
      <SelectLanguage bordered></SelectLanguage>
    </div>
  );
};

BreadCrumb.propTypes = {
  sendEmail: PropTypes.bool,
  schemaForm: PropTypes.object,
  endpoint: PropTypes.string,
  onChangeSearchText: PropTypes.func,
  searchText: PropTypes.string,
  isSearchInput: PropTypes.bool,
};

export default BreadCrumb;
