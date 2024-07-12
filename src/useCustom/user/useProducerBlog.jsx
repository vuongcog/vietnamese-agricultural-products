import { useSelector } from 'react-redux';
import {
  getAllBlog,
  getBlog,
  getBlogCategories,
  getBlogsWithCategory,
} from '../../selectors/user/selectors-blog';

const useProducerBlog = () => {
  const blogCategories = useSelector(getBlogCategories);
  const blogs = useSelector(getBlogsWithCategory);
  const blog = useSelector(getBlog);
  const allBlogs = useSelector(getAllBlog);

  return { blog, blogCategories, blogs, allBlogs };
};
export default useProducerBlog;
