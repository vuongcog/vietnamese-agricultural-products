import { useSelector } from 'react-redux';
import { getBlogCategories } from '../../selectors/user/selectors-blog';
import { useEffect } from 'react';

const useProducerBlog = () => {
  const blogCategories = useSelector(
    state => state[`blog-reducer`].blogCategories
  );
  return { blogCategories };
};
export default useProducerBlog;
