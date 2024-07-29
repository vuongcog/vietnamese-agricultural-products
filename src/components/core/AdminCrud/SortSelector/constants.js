export const SORT_FIELD_OPTIONS = [
  { label: 'Ngày tạo', value: 'created_at' },
  { label: 'Trạng thái', value: 'status' },
  { label: 'Tên', value: 'name' },
  { label: 'Email', value: 'email' },
  { label: 'Tên danh mục', value: 'category_name' },
  { label: 'Tên sản phẩm', value: 'product_name' },
  { label: 'Chủ đề', value: 'blog_title' },
  { label: 'Giá', value: 'unit_prices' },
  { label: 'Mã khuyến mãi', value: 'coupon_code' },
  { label: 'Giá', value: 'discount_value' },

  { label: 'Mã đơn', value: 'order_code' },
  { label: 'Tổng giá', value: 'order_total_prices' },
];

export const DEFAULT_SORT_FIELDS = ['created_at', 'status'];

export const SORT_DIRECTION_OPTIONS = {
  created_at: [
    { label: 'Mới nhất', value: 'desc' },
    { label: 'Cũ nhất', value: 'asc' },
  ],
  status: [
    { label: 'Hoạt động', value: 'asc' },
    { label: 'Ngừng', value: 'desc' },
  ],
  name: [
    { label: 'A - Z', value: 'asc' },
    { label: 'Z - A', value: 'desc' },
  ],
  email: [
    { label: 'A - Z', value: 'asc' },
    { label: 'Z - A', value: 'desc' },
  ],
  category_name: [
    { label: 'A - Z', value: 'asc' },
    { label: 'Z - A', value: 'desc' },
  ],
  product_name: [
    { label: 'A - Z', value: 'asc' },
    { label: 'Z - A', value: 'desc' },
  ],
  blog_title: [
    { label: 'A - Z', value: 'asc' },
    { label: 'Z - A', value: 'desc' },
  ],
  unit_prices: [
    { label: 'Tăng dần', value: 'asc' },
    { label: 'Giảm dần', value: 'desc' },
  ],

  coupon_code: [
    { label: 'Tăng dần', value: 'asc' },
    { label: 'Giảm dần', value: 'desc' },
  ],
  discount_value: [
    { label: 'Tăng dần', value: 'asc' },
    { label: 'Giảm dần', value: 'desc' },
  ],

  order_code: [
    { label: 'COD', value: 'asc' },
    { label: 'VNPAY', value: 'desc' },
  ],
  order_total_prices: [
    { label: 'Tăng dần', value: 'asc' },
    { label: 'Giảm dần', value: 'desc' },
  ],
};
