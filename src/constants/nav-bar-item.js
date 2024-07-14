import {
  DashboardOutlined,
  PersonOutline,
  CategoryOutlined,
  Inventory2Outlined,
  EditOutlined,
  FolderOpenOutlined,
  ConfirmationNumberOutlined,
  ImageOutlined,
} from '@mui/icons-material';
import langs from '../layouts/LayoutAdmin/langs';

export const SCHEMA = [
  {
    id: 1,
    name: 'Dashboard',
    icon: DashboardOutlined, // Icon outline phù hợp
    link: '/dashboard',
    color: 'text-[#f0414a]',
  },
  {
    id: 3,
    name: langs.user,
    icon: PersonOutline, // Icon outline phù hợp
    link: '/user',
    color: 'text-[#ffce00]',
  },
  {
    id: 4,
    name: langs.category,
    icon: CategoryOutlined, // Icon outline phù hợp
    link: '/category',
    color: 'text-[#00eca3]',
  },
  {
    id: 5,
    name: langs.product,
    icon: Inventory2Outlined, // Icon outline phù hợp hơn cho "Product"
    link: '/product',
    color: 'text-[#00e9ff]',
  },
  {
    id: 6,
    name: langs.blog,
    icon: EditOutlined, // Icon outline phù hợp hơn cho "Blog"
    link: '/blog',
    color: 'text-[#00e9ff]',
  },
  {
    id: 7,
    name: langs.blogCategory,
    icon: FolderOpenOutlined, // Icon outline phù hợp hơn cho "Blog Category"
    link: '/blog-category',
    color: 'text-[#00e9ff]',
  },
  {
    id: 9,
    name: langs.coupon,
    icon: ConfirmationNumberOutlined, // Icon outline phù hợp hơn cho "Coupon"
    link: '/coupon',
    color: 'text-[#00e9ff]',
  },
  {
    id: 10,
    name: langs.banner,
    icon: ImageOutlined, // Icon outline phù hợp hơn cho "Banner"
    link: '/banner',
    color: 'text-[#00e9ff]',
  },
];
