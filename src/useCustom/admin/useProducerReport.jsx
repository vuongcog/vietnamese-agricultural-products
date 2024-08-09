import { useSelector } from 'react-redux';
import {
  getReportOrder,
  getReportProduct,
  getReportProductCategory,
  getReportUser,
} from '../../selectors/admin/selectors-report';

const useProducerReport = () => {
  const report_user = useSelector(getReportUser);
  const report_product = useSelector(getReportProduct);
  const report_product_category = useSelector(getReportProductCategory);
  const report_order = useSelector(getReportOrder);

  return { report_user, report_product, report_product_category, report_order };
};
export default useProducerReport;
