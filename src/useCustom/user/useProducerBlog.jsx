import { useSelector } from 'react-redux';
import {
  getBlog,
  getBlogCategories,
  getBlogsWithCategory,
} from '../../selectors/user/selectors-blog';

const useProducerBlog = () => {
  const blogCategories = useSelector(getBlogCategories);
  const blogs = useSelector(getBlogsWithCategory);
  const blog = useSelector(getBlog);

  return { blog, blogCategories, blogs };
};
export default useProducerBlog;
