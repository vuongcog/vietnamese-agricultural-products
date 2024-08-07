import { ADD_DATA } from '../../../../components/core/AdminCrud/Store/constants';
import langs from '../langs';

export const schemaFormCreate = {
  title: langs.CREATE_PRODUCT,
  doneText: ['Cancel', 'Save'],
  button: langs.createProduct,
  type: ADD_DATA,
  schemaForm: [
    {
      name: 'id_category',
      label: langs.id,
      placeholder: langs.id,
      endpoint: 'http://127.0.0.1:8000/api/category',
      isRequire: true,
      labelField: 'category_name',
      valueField: 'id',
      type: 'select',
    },
    {
      name: 'product_name',
      label: langs.name,
      placeholder: langs.name,
      isRequire: true,
      type: 'text',
    },
    {
      name: 'product_des',
      label: langs.des,
      placeholder: langs.des,
      isRequire: true,
      type: 'editor',
    },
    {
      name: 'product_info',
      label: langs.info,
      placeholder: langs.info,
      isRequire: true,
      type: 'editor',
    },
    {
      name: 'product_image',
      label: langs.image,
      placeholder: langs.image,
      isRequire: true,
      type: 'file',
    },
    {
      name: 'quantity',
      label: langs.quantity,
      placeholder: langs.quantity,
      isRequire: true,
      type: 'number',
    },
    {
      name: 'unit_prices',
      label: langs.unitPrices,
      placeholder: langs.unitPrices,
      isRequire: true,
      type: 'number',
    },
    {
      name: 'status',
      label: langs.status,
      type: 'select',
      items: [
        {
          name: 'inactive',
          value: 'inactive',
        },
        {
          name: 'active',
          value: 'active',
        },
      ],
      placeholder: langs.status,
      isRequire: true,
    },
  ],
};
