export const MAPPER_MERMISSION_ROLE = {
  admin: {
    all: true,
    order: true,
    [`user`]: true,
    [`blog_category`]: true,
    [`product-category`]: true,
    [`blog`]: true,
    [`product`]: true,
    [`coupon`]: true,
    [`banner`]: true,
  },
  manager: {
    order: true,
    [`user`]: true,
    [`blog_category`]: true,
    [`product-category`]: true,
    [`blog`]: true,
    [`product`]: true,
    [`coupon`]: true,
    [`banner`]: true,
  },
  staff: {
    order: true,
    [`user`]: true,
    [`blog_category`]: true,
    [`product-category`]: true,
    [`blog`]: true,
    [`product`]: true,
    [`coupon`]: true,
    [`banner`]: true,
  },
  customer: {},
};
export const MAPPER_PERMISSION_ROUTE_USER = {
  admin: true,
  manager: true,
};
