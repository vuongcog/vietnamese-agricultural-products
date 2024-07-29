import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import useProducerDataUser from '../../../../../useCustom/user/useProducerDataUser';
import { Divider, useDisclosure } from '@chakra-ui/react';

import DialogMessage from '../../../../../components/core/DialogMessage';
import OrderCode from '../OrderCode';
import OrderNotes from '../../../../admin/Order/components/OrderNotes';
import OrderCustomer from '../../../../admin/Order/components/OrderCustomer';
import OrderPaymentStatus from '../../../../admin/Order/components/PaymentStatus';
import OrderDeliveryAddress from '../../../../admin/Order/components/OrderDeliveryAddress';
import OrderTotalPrice from '../../../../admin/Order/components/OrderTotalPrices';
import CreatedAtComponent from '../../../../../components/core/CreatedAt';
import UpdatedAtComponent from '../../../../../components/core/UpdatedAt';
import OrderPaymentType from '../OrderPaymentType';
import BillOrderPrintable from '../BillOrder';
import SortSelector from '../../../../../components/core/AdminCrud/SortSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_DATA_USER } from '../../../../../actions/action-infor-user';
import ProgressFullScreen from '../../../../../components/core/ProgressFullScreen';
import SearchInput from '../../../../../components/core/AdminCrud/SearchInput';
import { useDebounce } from '../../../../../utils/use-debounce';
import ProfileProductCard from '../ProfileProductCard';

const ProfilePurchaseUser = () => {
  const {
    dataUser: { orders = [] },
    isFetchingDataUser,
  } = useProducerDataUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('created_at');
  const [sortDirection, setSortDirection] = useState('asc');
  const [search, setSearch] = useState('');
  const debounceSearch = useDebounce(search, 300);
  const dispatch = useDispatch();
  const handlerSetSearch = e => {
    setSearch(e.target.value);
  };
  const handlerSortChange = (newSortField, sortDirection) => {
    setSortBy(newSortField);
    setSortDirection(sortDirection);
  };
  useEffect(() => {
    try {
      dispatch({
        type: FETCH_DATA_USER,
        payload: {
          endpoint: `/taikhoan/thongtin-nguoidung?sort_by=${sortBy}&sort_direction=${sortDirection}&search=${debounceSearch}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, [sortBy, sortDirection, debounceSearch]);
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
    // {
    //   name: 'Mã khuyến mãi',
    //   selector: row => row.id_coupon,
    //   sortable: true,
    //   cell: row => row.id_coupon || 'N/A',
    // },
    // {
    //   name: 'Mã thanh toán',
    //   selector: row => row.id_payment,
    //   sortable: true,
    //   cell: row => row.id_payment || 'N/A',
    // },
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
    console.log(data);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
      isOpen: isOpen1,
      onOpen: onOpen1,
      onClose: onClose1,
    } = useDisclosure();
    return (
      <div className="flex gap-2 ">
        <div
          onClick={onOpen}
          className="hover:text-blue-500 hover:underline hover:italic cursor-pointer"
        >
          Xem chi tiết đơn hàng
        </div>
        {'/'}
        <div
          onClick={onOpen1}
          className="hover:text-blue-500 hover:underline hover:italic cursor-pointer"
        >
          Xem sản phẩm có trong đơn hàng
        </div>
        <DialogMessage
          width={1000}
          isOpen={isOpen1}
          onOpen={onOpen1}
          onClose={onClose1}
        >
          <div>
            {data.items.map(item => (
              <div className="flex flex-col gap-2">
                <ProfileProductCard
                  key={item.id}
                  item={item}
                ></ProfileProductCard>
                <Divider borderWidth={1} borderColor={'black'}></Divider>
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
    <div>
      {isFetchingDataUser && <ProgressFullScreen></ProgressFullScreen>}
      <div className="flex gap-2 items-center">
        <SortSelector
          defaultOptions={[`created_at`]}
          extraFields={['order_code', 'order_total_prices']}
          onSortChange={handlerSortChange}
        ></SortSelector>
        <SearchInput
          placeholder={'Tìm mã đơn hàng'}
          onChangeSearchText={handlerSetSearch}
        ></SearchInput>
      </div>
      <DataTable
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
        customStyles={customStyles}
      />
    </div>
  );
};

export default ProfilePurchaseUser;
