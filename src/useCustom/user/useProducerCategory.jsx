import { useSelector } from "react-redux";
import { getCategories } from "../../selectors/user/selectors-category";

const useProducerCategory = () => {
  const categories = useSelector(getCategories);
  return {
    categories,
  };
};

export default useProducerCategory;
