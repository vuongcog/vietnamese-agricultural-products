import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import tableStyles from './styles.module.scss';
import useProducerDataUser from '../../../../../useCustom/user/useProducerDataUser';
import { useDisclosure } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

import DialogMessage from '../../../../../components/core/DialogMessage';
import ProfileProductCard from '../ProfileProductCard';
import OrderCode from '../OrderCode';
import OrderNotes from '../../../../admin/Order/components/OrderNotes';
import OrderCustomer from '../../../../admin/Order/components/OrderCustomer';
import OrderPaymentStatus from '../../../../admin/Order/components/PaymentStatus';
import OrderDeliveryAddress from '../../../../admin/Order/components/OrderDeliveryAddress';
import OrderTotalPrice from '../../../../admin/Order/components/OrderTotalPrices';
import CreatedAtComponent from '../../../../../components/core/CreatedAt';
import UpdatedAtComponent from '../../../../../components/core/UpdatedAt';
import classNames from 'classnames';
import OrderPaymentType from '../OrderPaymentType';

const ProfilePurchaseUser = () => {
  const {
    dataUser: { orders = [] }, // Cung cấp giá trị mặc định rỗng cho orders
  } = useProducerDataUser();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const columns = [
    {
      name: 'Mã đơn hàng',
      selector: row => row.order_code,
      sortable: true,
      minWidth: '200px',
      cell: row => <OrderCode order_code={row.order_code} />,
    },
    {
      name: 'Tổng giá',
      selector: row => row.order_total_prices,
      sortable: true,
      cell: row => (
        <OrderTotalPrice order_total_prices={row.order_total_prices} />
      ),
    },
    {
      name: 'Ghi chú',
      selector: row => row.order_notes,
      sortable: true,
      cell: row => <OrderNotes order_notes={row.order_notes} />,
    },
    {
      name: 'Tên người nhận',
      selector: row => row.customer,
      sortable: true,
      cell: row => <OrderCustomer customer={row.customer} />,
    },
    {
      name: 'Hình thức thanh toán',
      minWidth: '300px',
      selector: row => row.payment_type,
      sortable: true,
      cell: row => <OrderPaymentType payment_type={row.payment_type} />,
    },
    {
      name: 'Trạng thái thanh toán',
      selector: row => row.payment_status,
      sortable: true,
      cell: row => <OrderPaymentStatus payment_status={row.payment_status} />,
    },
    {
      name: 'Địa chỉ vận chuyển',
      selector: row => row.delivery_address,
      sortable: true,
      cell: row => (
        <OrderDeliveryAddress delivery_address={row.delivery_address} />
      ),
    },
    {
      name: 'Số điện thoại',
      selector: row => row.phone,
      sortable: true,
      cell: row => row.phone,
    },
    {
      name: 'Mã khuyến mãi',
      selector: row => row.id_coupon,
      sortable: true,
      cell: row => row.id_coupon || 'N/A',
    },
    {
      name: 'Mã thanh toán',
      selector: row => row.id_payment,
      sortable: true,
      cell: row => row.id_payment || 'N/A',
    },
    {
      name: 'Ngày tạo',
      selector: row => row.created_at,
      sortable: true,
      minWidth: '200px',
      cell: row => <CreatedAtComponent created_at={row.created_at} />,
    },
    {
      name: 'Ngày cập nhật',
      selector: row => row.updated_at,
      sortable: true,
      minWidth: '200px',
      cell: row => <UpdatedAtComponent updated_at={row.updated_at} />,
    },
  ];

  const ExpandedComponent = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <div onClick={onOpen} className="cursor-pointer">
          Xem chi tiết sản phẩm
        </div>
        <DialogMessage
          width={'auto'}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <RenderTableProduct products={data.items} />
        </DialogMessage>
      </>
    );
  };

  const RenderTableProduct = ({ products }) => {
    return (
      <div className="flex flex-col pl-60 gap-6">
        {products.map(item => (
          <React.Fragment key={item.id}>
            <ProfileProductCard item={item} />
            <Divider borderWidth="1px" />
          </React.Fragment>
        ))}
      </div>
    );
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handlePerRowsChange = (newPerPage, page) => {
    setPerPage(newPerPage);
    setCurrentPage(page);
  };

  const customStyles = {
    pagination: {
      style: {
        display: 'flex',
        justifyContent: 'flex-start',
      },
    },
    rowsPerPage: {
      style: {
        marginRight: 'auto',
      },
    },
  };

  return (
    <div className={tableStyles.container}>
      <DataTable
        title="Profile Purchase User"
        columns={columns}
        data={orders.slice((currentPage - 1) * perPage, currentPage * perPage)} // Slicing data for pagination
        pagination
        paginationServer
        paginationTotalRows={orders.length}
        paginationPerPage={perPage}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        highlightOnHover
        className={classNames(tableStyles.table)}
        customStyles={customStyles}
      />
    </div>
  );
};

export default ProfilePurchaseUser;
