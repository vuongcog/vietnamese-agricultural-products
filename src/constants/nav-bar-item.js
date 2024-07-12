import langs from '../layouts/LayoutAdmin/langs';

export const SCHEMA = [
  {
    id: 1,
    name: 'Dashboard',
    icon: 'fa fa-tachometer-alt', // Icon phù hợp
    link: '/dashboard',
    color: 'text-[#f0414a]',
  },
  {
    id: 3,
    name: langs.user,
    icon: 'fa fa-user', // Icon phù hợp
    link: '/user',
    color: 'text-[#ffce00]',
  },
  {
    id: 4,
    name: langs.category,
    icon: 'fa fa-tags', // Icon phù hợp
    link: '/category',
    color: 'text-[#00eca3]',
  },
  {
    id: 5,
    name: langs.product,
    icon: 'fa fa-cube', // Icon phù hợp hơn cho "Product"
    link: '/product',
    color: 'text-[#00e9ff]',
  },
  {
    id: 6,
    name: langs.blog,
    icon: 'fa fa-pencil-alt', // Icon phù hợp hơn cho "Blog"
    link: '/blog',
    color: 'text-[#00e9ff]',
  },
  {
    id: 7,
    name: langs.blogCategory,
    icon: 'fa fa-folder-open', // Icon phù hợp hơn cho "Blog Category"
    link: '/blog-category',
    color: 'text-[#00e9ff]',
  },
  {
    id: 9,
    name: langs.coupon,
    icon: 'fa fa-ticket-alt', // Icon phù hợp hơn cho "Coupon"
    link: '/coupon',
    color: 'text-[#00e9ff]',
  },
  {
    id: 10,
    name: langs.banner,
    icon: 'fa fa-image', // Icon phù hợp hơn cho "Banner"
    link: '/banner',
    color: 'text-[#00e9ff]',
  },
];
