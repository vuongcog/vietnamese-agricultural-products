import React from 'react';
import UserDistributionChart from '../components/ChartUser';
import { useContext } from 'react';
import { ReportContext } from '../container';
import BarChart from '../components/ChartProductVenue';

const ReportLayout = () => {
  const {
    handlerChangeSelectedProduct,
    handlerChangeSelectedUser,
    report_order,
    report_product,
    report_product_category,
    report_user,
  } = useContext(ReportContext);

  return (
    <div className="p-12  overflow-y-scroll flex flex-col h-[100vh]">
      <UserDistributionChart
        onChangeSeletedUser={handlerChangeSelectedUser}
        users={report_user}
      />
      <div className="w-[100%]">
        <BarChart
          onChangeSelectedProduct={handlerChangeSelectedProduct}
          report_product={report_product}
        ></BarChart>
      </div>
    </div>
  );
};

export default ReportLayout;
