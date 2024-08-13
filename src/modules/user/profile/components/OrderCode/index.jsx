import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import './styles.scss';
import { ShoppingCartOutlined, CategoryOutlined } from '@mui/icons-material';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import DialogMessage from '../../../../../components/core/DialogMessage';
import ProfileProductCard from '../ProfileProductCard';
import BillOrderPrintable from '../BillOrder';

const OrderCode = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  return (
    <div>
      <Tooltip placement="top" label={data.order_code} aria-label="Full text">
        <div className={styles.container}>
          <span className={styles.label}>{data.order_code}</span>
          <div className={'menuContainer'}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon fontSize={'11'} />}
                variant="outline"
                className={styles.menuButton}
              />
              <MenuList>
                <MenuItem onClick={onOpen}>
                  <div className="flex items-center gap-1">
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                    <span>Đơn hàng</span>
                  </div>
                </MenuItem>
                <MenuItem onClick={onOpen1}>
                  <div className="flex items-center gap-1">
                    <CategoryOutlined></CategoryOutlined>
                    <span>Sản phẩm</span>
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </Tooltip>
      <DialogMessage
        width={1000}
        isOpen={isOpen1}
        onOpen={onOpen1}
        onClose={onClose1}
      >
        <div>
          {data.items.map(item => (
            <div key={item.id} className="flex flex-col gap-2 py-10">
              <ProfileProductCard item={item}></ProfileProductCard>
            </div>
          ))}
        </div>
      </DialogMessage>

      <DialogMessage
        width={1000}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <BillOrderPrintable order={data}></BillOrderPrintable>
      </DialogMessage>
    </div>
  );
};

OrderCode.propTypes = {
  product_name: PropTypes.string.isRequired,
};

export default OrderCode;
