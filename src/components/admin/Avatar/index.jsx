import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import useProducerDataUser from '../../../useCustom/admin/useProducerDataUser';
import { useDispatch } from 'react-redux';
import { CHANGE_PASSWORD } from '../../core/AdminCrud/Store/constants';
import DialogMessage from '../../core/DialogMessage';
import { schemaChangePassword } from '../../core/AdminCrud/BreadCrumb/constants/schema-form-change-password';
import FormEmailContainer from '../../core/FormEmail/container';
import { useDisclosure } from '@chakra-ui/react';

const AdminAvatar = () => {
  const { inforUser } = useProducerDataUser();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const dispatch = useDispatch();
  const handlerChangePassword = data => {
    dispatch({
      type: CHANGE_PASSWORD,
      payload: { ...data, endpoint: '/change/password' },
    });
  };
  return (
    <div className={styles['admin-avatar']}>
      <Avatar url={inforUser.url_avatar} />
      <Info
        onClickCB={onOpen}
        name={inforUser.name}
        phone={inforUser.phone_num}
      />
      <DialogMessage isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <FormEmailContainer
          schemaForm={schemaChangePassword}
          handlerSubmit={handlerChangePassword}
        />
      </DialogMessage>
    </div>
  );
};

const Avatar = ({ url }) => (
  <img className={styles['admin-avatar__image']} src={url} alt="Admin" />
);

const Info = ({ name, phone, onClickCB }) => (
  <div className={styles['admin-avatar__info']}>
    <div className={styles['admin-avatar__name']}>{name}</div>
    <div onClick={onClickCB} className={styles['admin-avatar__password']}>
      Đổi mật khẩu
    </div>
    {/* <div className={styles['admin-avatar__phone']}>{phone}</div> */}
  </div>
);

AdminAvatar.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};

Info.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};

Info.defaultProps = {
  name: 'Vương',
  phone: '0348079230',
};

AdminAvatar.defaultProps = {
  info: {
    name: 'Vương',
    phone: '0348079230',
  },
};

export default AdminAvatar;
