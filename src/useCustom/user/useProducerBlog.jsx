import { useSelector } from 'react-redux';
import {
  getAllBlog,
  getBlog,
  getBlogCategories,
  getBlogsWithCategory,
  getRelatedBlogs,
} from '../../selectors/user/selectors-blog';

const useProducerBlog = () => {
  const blogCategories = useSelector(getBlogCategories);
  const blogs = useSelector(getBlogsWithCategory);
  const blog = useSelector(getBlog);
  const relatedBlogs = useSelector(getRelatedBlogs);
  const allBlogs = useSelector(getAllBlog);

  return { relatedBlogs, blog, blogCategories, blogs, allBlogs };
};
export default useProducerBlog;
