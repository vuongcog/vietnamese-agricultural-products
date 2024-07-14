import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import axios from 'axios';
import styles from './styles.module.scss';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import langs from '../langs';

const ProvinceSelect = ({ handlerSetAddress }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const { t } = useTranslation();
  useMemo(() => {
    const province = _.find(provinces, { id: selectedProvince });
    const district = _.find(districts, { id: selectedDistrict });
    const ward = _.find(wards, { id: selectedWard });
    const address = `${province?.name}/${district?.name}/${ward?.name}/`;
    handlerSetAddress(address);
  }, [selectedProvince, selectedDistrict, selectedWard]);
  useEffect(() => {
    axios
      .get('https://esgoo.net/api-tinhthanh/1/0.htm')
      .then(response => setProvinces(response.data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      axios
        .get(`https://esgoo.net/api-tinhthanh/2/${selectedProvince}.htm`)
        .then(response => setDistricts(response.data.data))
        .catch(error => console.error('Error:', error));
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      axios
        .get(`https://esgoo.net/api-tinhthanh/3/${selectedDistrict}.htm`)
        .then(response => setWards(response.data.data))
        .catch(error => console.error('Error:', error));
    }
  }, [selectedDistrict]);

  return (
    <div className={styles.container}>
      <Select
        placeholder={`${t(langs.province)}/${t(langs.city)}`}
        onChange={e => setSelectedProvince(e.target.value)}
      >
        {provinces.map(province => (
          <option key={province.id} value={province.id}>
            {province.name}
          </option>
        ))}
      </Select>
      <Select
        placeholder={t(langs.district)}
        onChange={e => setSelectedDistrict(e.target.value)}
      >
        {districts?.map(district => (
          <option key={district.id} value={district.id}>
            {district.name}
          </option>
        ))}
      </Select>
      <Select
        onChange={e => {
          setSelectedWard(e.target.value);
        }}
        placeholder={`${t(langs.township)}/${t(langs.ward)}`}
      >
        {wards?.map(ward => (
          <option key={ward.id} value={ward.id}>
            {ward.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default ProvinceSelect;
