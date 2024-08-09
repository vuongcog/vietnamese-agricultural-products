import { REDUCER_REPORT } from '../../constants/name-store/admin/name-space-reducer';

export const getReportUser = state => state[REDUCER_REPORT]?.report_user;
export const getReportProduct = state => state[REDUCER_REPORT]?.report_product;
export const getReportProductCategory = state =>
  state[REDUCER_REPORT]?.report_product_category;
export const getReportOrder = state => state[REDUCER_REPORT]?.report_order;
