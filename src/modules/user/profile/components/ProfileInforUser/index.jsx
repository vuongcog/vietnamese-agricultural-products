import React from 'react';
import useProducerDataUser from '../../../../../useCustom/user/useProducerDataUser';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Button } from 'antd';
import { useDisclosure } from '@chakra-ui/react';
import DialogMessage from '../../../../../components/core/DialogMessage';
import { useDispatch } from 'react-redux';
import { CHANGE_PASSWORD } from '../../../../../actions/action-infor-user';
import { schemaChangePassword } from '../../../../../components/core/AdminCrud/BreadCrumb/constants/schema-form-change-password';
import FormEmailContainer from '../../../../../components/core/FormEmail/container';
const ProfileInforUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataUser } = useProducerDataUser();
  const dispatch = useDispatch();

  const handlerChangePassword = data => {
    dispatch({
      type: CHANGE_PASSWORD,
      payload: { ...data, endpoint: '/change/password' },
    });
  };
  return (
    <div className={classNames(styles.container, 'font-serif')}>
      <img
        className="w-[296px] h-[296px] rounded-full"
        src={dataUser.url_avatar}
        alt=""
      />

      <div className="flex gap-2">
        <span className="font-semibold">Họ và tên:</span>
        <span className="italic">{dataUser.name}</span>
      </div>
      <div className="flex gap-2">
        <span className="font-semibold">Email: </span>
        <span className="italic">{dataUser.email}</span>
      </div>
      <div className="flex gap-2">
        <span className="font-semibold">SDT: </span>
        <span className="italic">{dataUser.phone_num}</span>
      </div>

      <div>
        <button
          onClick={onOpen}
          className="underline italic text-[20px] text-blue-500"
        >
          Đổi mật khẩu
        </button>
      </div>
      <DialogMessage isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <FormEmailContainer
          schemaForm={schemaChangePassword}
          handlerSubmit={handlerChangePassword}
        />
      </DialogMessage>
    </div>
  );
};

export default ProfileInforUser;
