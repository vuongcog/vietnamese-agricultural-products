import React from 'react';
import useProducerDataUser from '../../../../../useCustom/user/useProducerDataUser';
import styles from './styles.module.scss';
const ProfileInforUser = () => {
  const { dataUser } = useProducerDataUser();
  return (
    <div className={styles.container}>
      <img
        className="w-[296px] h-[296px] rounded-full"
        src={dataUser.url_avatar}
        alt=""
      />
      <table>
        <tbody>
          <tr>
            <td>Họ và tên: </td>
            <td>{dataUser.name}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{dataUser.email}</td>
          </tr>
          <tr>
            <td>Số điện thoại: </td>
            <td>{dataUser.phone_num}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInforUser;
