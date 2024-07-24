import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import useProducerDataUser from '../../../useCustom/admin/useProducerDataUser';

const AdminAvatar = () => {
  const { inforUser } = useProducerDataUser();
  return (
    <div className={styles['admin-avatar']}>
      <Avatar url={inforUser.url_avatar} />
      <Info name={inforUser.name} phone={inforUser.phone_num} />
    </div>
  );
};

const Avatar = ({ url }) => (
  <img className={styles['admin-avatar__image']} src={url} alt="Admin" />
);

const Info = ({ name, phone }) => (
  <div className={styles['admin-avatar__info']}>
    <div className={styles['admin-avatar__name']}>{name}</div>
    <div className={styles['admin-avatar__phone']}>{phone}</div>
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
