import { useSelector } from 'react-redux';
import { getInforUser } from '../../selectors/admin/selectors-data-user';

const useProducerDataUser = () => {
  const inforUser = useSelector(getInforUser);

  return { inforUser };
};
export default useProducerDataUser;
