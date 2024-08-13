import React from 'react';
import styles from './styles.module.scss';
import Content from '../components/Content';
import '@fontsource/kalam';
import ContainerContent from '../components/ContainerContent';
import Icon from '../components/Icon';
import { Divider } from '@chakra-ui/react';
const Contact = () => (
  <div className={styles.layout}>
    <div className={styles[`container-contact`]}>
      <div className={styles.overlay}>
        <h1 className="text-[#ebe8e1] text-center">Liên hệ với chúng tôi</h1>
        <ContainerContent>
          <Icon icon={<i className="fa-solid fa-phone"></i>}></Icon>
          <Content title={'SỐ ĐIỆN THOẠI'} message={'0348079230'}></Content>
        </ContainerContent>
        <Divider color={'#ebe8e1'}></Divider>
        <ContainerContent>
          <Icon icon={<i className="fa-solid fa-location-dot"></i>}></Icon>
          <Content
            title={'ĐỊA CHỈ'}
            message={'4/8B Tạ Quang Bửu/ Phường 15/ Quận 8/ Thành phố HCM'}
          ></Content>
        </ContainerContent>
        <Divider color={'#ebe8e1'}></Divider>
        <ContainerContent>
          <Icon icon={<i className="fa-solid fa-globe"></i>}></Icon>
          <Content
            title={'WEBSITE'}
            message={'https://ganv.ganv.kesug.com/'}
          ></Content>
        </ContainerContent>
        <Divider color={'#ebe8e1'}></Divider>

        <ContainerContent>
          <Icon icon={<i className="fa-solid fa-location-dot"></i>}></Icon>
          <Content
            title={'EMAIL'}
            message={'huynhnhatvuong01012002@gmail.com'}
          ></Content>
        </ContainerContent>
      </div>
    </div>
  </div>
);

export default Contact;
