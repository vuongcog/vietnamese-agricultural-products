import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ContactEmergencyOutlined } from '@mui/icons-material';

export const SCHEMA = [
  {
    id: 1,
    name: 'home',
    icon: HomeOutlinedIcon,
    link: '/',
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
  {
    id: 8,
    name: 'contactUs',
    icon: ContactEmergencyOutlined,
    link: '/contact',
  },
];
