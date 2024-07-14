import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
} from '@chakra-ui/react';
import styles from './styles.module.scss';
import ProvinceSelect from '../../SelectLocation';
import { formattedNumber } from '../../../../../utils/format-number';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import langs from '../../langs';

const FormComponent = ({ handlerSetValueRequest, totalPrice }) => {
  const [formData, setFormData] = useState({
    first_name: 'Nguyen',
    last_name: 'Van Huynh',
    email: 'huynhnhatvuong01012002@gmail.com',
    phone: '092362637',
    address: '123 Ho Ngoc Lam Tan Tao Binh Tan',
    notes: 'Giao gio hanh chinh',
    payment: 'cod',
  });
  const [otherAddress, setOtherAdress] = useState('');
  const { t } = useTranslation();
  const handlerSetAddress = address => {
    setFormData(pre => ({ ...pre, address: address }));
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkIfAllUndefined = address => {
    const parts = address.split('/');
    return parts.some(part => part === 'undefined');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkIfAllUndefined(formData.address)) {
      toast.error('Xin hãy điền đầy đủ thông tin địa chỉ');
      return;
    }

    handlerSetValueRequest({
      ...formData,
      address: `${formData.address}/${otherAddress}`,
    });
  };
  return (
    <div className={styles['form-container']}>
      <Box borderWidth="1px" p={6} boxShadow="lg">
        <form onSubmit={handleSubmit} className={styles['form']}>
          <FormControl id="first_name" className={styles['form__group']}>
            <FormLabel>{t(langs.firstName)}</FormLabel>
            <Input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className={styles['form__input']}
            />
          </FormControl>
          <FormControl id="last_name" className={styles['form__group']}>
            <FormLabel>{t(langs.lastName)}</FormLabel>
            <Input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className={styles['form__input']}
            />
          </FormControl>
          <FormControl id="email" className={styles['form__group']}>
            <FormLabel>{t(langs.email)}</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles['form__input']}
            />
          </FormControl>
          <FormControl id="phone" className={styles['form__group']}>
            <FormLabel>{t(langs.phone)}</FormLabel>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles['form__input']}
            />
          </FormControl>
          <FormControl id="address" className={styles['form__group']}>
            <div className="flex gap-3">
              <div>
                <FormLabel>{t(langs.address)}</FormLabel>
                <ProvinceSelect
                  handlerSetAddress={handlerSetAddress}
                ></ProvinceSelect>
              </div>
              <div>
                <FormLabel>{`${t(langs.houseNumber)}/${t(
                  langs.street
                )}`}</FormLabel>
                <Textarea
                  value={otherAddress}
                  onChange={e => {
                    setOtherAdress(e.target.value);
                  }}
                  required
                  className={styles['form__input']}
                />
              </div>
            </div>
          </FormControl>
          <FormControl id="notes" className={styles['form__group']}>
            <FormLabel>{t(langs.notes)}</FormLabel>
            <Textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className={styles['form__textarea']}
            />
          </FormControl>
          <FormControl id="payment" className={styles['form__group']}>
            <FormLabel>{t(langs.order)}</FormLabel>
            <Select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className={styles['form__select']}
            >
              <option value="cod">COD</option>
              <option value="credit">Credit Card</option>
              <option value="vnpay">VNPAY</option>
            </Select>
          </FormControl>
          <FormControl id="payment" className={styles['form__group']}>
            <FormLabel>Total Price</FormLabel>
            <span className="text-red-500 font-bold">
              {formattedNumber(totalPrice)} đồng
            </span>
          </FormControl>
          <Box gridColumn="span 2">
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              className={styles['form__button']}
            >
              {t(langs.order)}
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default FormComponent;
