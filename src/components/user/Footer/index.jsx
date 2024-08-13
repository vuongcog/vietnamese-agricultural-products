import React from 'react';
import ContainerContent from '../../../modules/user/contact/components/ContainerContent';
import Icon from '../../../modules/user/contact/components/Icon';
import { Divider } from '@chakra-ui/react';
import Content from '../../../modules/user/contact/components/Content';
import '@fontsource/kalam';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={styles.layout}>
      <div>
        <h1 className="text-[14px] text-white">Liên hệ</h1>
        <ContainerContent>
          <Icon
            stylesWrapper={styles.wrapperIcon}
            icon={<i className="fa-solid fa-phone"></i>}
          ></Icon>
          <Content
            stylesTitle={styles.title}
            stylesMessage={styles.message}
            title={'SỐ ĐIỆN THOẠI'}
            message={'0348079230'}
          ></Content>
        </ContainerContent>
        <ContainerContent>
          <Icon
            stylesWrapper={styles.wrapperIcon}
            icon={<i className="fa-solid fa-location-dot"></i>}
          ></Icon>
          <Content
            stylesTitle={styles.title}
            stylesMessage={styles.message}
            title={'ĐỊA CHỈ'}
            message={'4/8B Tạ Quang Bửu/ Phường 15/ Quận 8/ Thành phố HCM'}
          ></Content>
        </ContainerContent>
        <ContainerContent>
          <Icon
            stylesWrapper={styles.wrapperIcon}
            icon={<i className="fa-solid fa-globe"></i>}
          ></Icon>
          <Content
            stylesTitle={styles.title}
            stylesMessage={styles.message}
            title={'WEBSITE'}
            message={'https://ganv.ganv.kesug.com/'}
          ></Content>
        </ContainerContent>
        <ContainerContent>
          <Icon
            stylesWrapper={styles.wrapperIcon}
            icon={<i className="fa-solid fa-location-dot"></i>}
          ></Icon>
          <Content
            stylesTitle={styles.title}
            stylesMessage={styles.message}
            title={'EMAIL'}
            message={'huynhnhatvuong01012002@gmail.com'}
          ></Content>
        </ContainerContent>
      </div>
      <div>
        <h1 className="text-[14px] text-white">Link</h1>
        <div className={styles[`link-container`]}>
          <Link to={'/'}>TRANG CHỦ</Link>
          <Link to={'/shopping'}>SẢN PHẨM</Link>
          <Link to={'/blog-categories'}>BÀI VIẾT</Link>
          <Link to={'/contact'}>LIÊN HỆ</Link>
        </div>
      </div>
      <div>
        <h1 className="text-[14px] text-white">Dịch vụ</h1>
        <div className={styles[`link-container`]}>
          <Link>MUA HÀNG</Link>
          <Link>XEM BÀI VIẾT</Link>
        </div>
      </div>
      <div>
        <h1 className="text-[14px] text-white">Sản phẩm</h1>
        <div className={styles[`link-container`]}>
          <Link>NẤM SẤY KHÔ</Link>
          <Link>TRÁI CÂY SẤY KHÔ</Link>
          <Link>HẠT SẤY KHÔ</Link>
          <Link>ĐẬU VÀ NGŨ CỐC SẤY KHÔ</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
