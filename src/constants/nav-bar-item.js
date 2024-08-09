import {
  DashboardOutlined,
  PersonOutline,
  CategoryOutlined,
  Inventory2Outlined,
  EditOutlined,
  FolderOpenOutlined,
  ConfirmationNumberOutlined,
  ImageOutlined,
  ReceiptOutlined,
} from '@mui/icons-material';
import langs from '../layouts/LayoutAdmin/langs';

export const SCHEMA = [
  {
    id: 1,
    name: 'Report',
    icon: DashboardOutlined,
    link: '/report',
    color: 'text-[#f0414a]',
  },
  {
    id: 10,
    name: 'Đơn hàng',
    icon: ReceiptOutlined,
    link: '/order',
    color: 'text-[#00e9ff]',
  },
  {
    id: 3,
    type: 'user',
    name: langs.user,
    icon: PersonOutline,
    link: '/user',
    color: 'text-[#ffce00]',
  },
  {
    id: 4,
    name: langs.category,
    icon: CategoryOutlined,
    link: '/category',
    color: 'text-[#00eca3]',
  },
  {
    id: 5,
    name: langs.product,
    icon: Inventory2Outlined,
    link: '/product',
    color: 'text-[#00e9ff]',
  },
  {
    id: 6,
    name: langs.blog,
    icon: EditOutlined,
    link: '/blog',
    color: 'text-[#00e9ff]',
  },
  {
    id: 7,
    name: langs.blogCategory,
    icon: FolderOpenOutlined,
    link: '/blog-category',
    color: 'text-[#00e9ff]',
  },
  {
    id: 9,
    name: langs.coupon,
    icon: ConfirmationNumberOutlined,
    link: '/coupon',
    color: 'text-[#00e9ff]',
  },
  {
    id: 10,
    name: langs.banner,
    icon: ImageOutlined,
    link: '/banner',
    color: 'text-[#00e9ff]',
  },
];
