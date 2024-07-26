import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const SCHEMA = [
  {
    id: 1,
    name: 'home',
    icon: HomeOutlinedIcon,
    link: '/',
  },
  {
    id: 6,
    name: 'register',
    icon: AppRegistrationOutlinedIcon,
    link: '/authen/signup',
  },
  {
    id: 3,
    name: 'vegetables',
    icon: ShoppingCartOutlinedIcon,
    link: '/shopping',
  },
  {
    id: 7,
    name: 'blogs',
    icon: ArticleOutlinedIcon,
    link: '/blog-categories',
  },
];
