import React from 'react';
import UserDistributionChart from '../components/ChartUser';
import { useContext } from 'react';
import { ReportContext } from '../container';
import BarChart from '../components/ChartProductVenue';
import ChartCategory from '../components/Category';

const ReportLayout = () => {
  const {
    handlerChangeSelectedProduct,
    handlerChangeSelectedUser,
    report_order,
    report_product,
    report_product_category,
    report_user,
    handlerChangeSelectedProductCategory,
    categories,
    handlerChangeSelectedProductCategoryPeriod,
    handlerChangeSelectedProductCategoryLimit,
    selectedCategory,
  } = useContext(ReportContext);

  return (
    <div className="p-12 bg-white overflow-y-scroll flex flex-col h-[100vh]">
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
      <div className="w-[100%]">
        <ChartCategory
          selectedCategory={selectedCategory}
          onChangeSelectedProductCategoryPeriod={
            handlerChangeSelectedProductCategoryPeriod
          }
          onChangeSelectedProductCategoryLimit={
            handlerChangeSelectedProductCategoryLimit
          }
          categories={categories}
          onChangeSelectedProduct={handlerChangeSelectedProductCategory}
          report_product={report_product_category}
        ></ChartCategory>
      </div>
    </div>
  );
};

export default ReportLayout;
