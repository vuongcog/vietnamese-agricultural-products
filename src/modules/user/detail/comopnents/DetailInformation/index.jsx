import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import DetailOrder from '../DetailOrder';
import useProducerDetail from '../../../../../useCustom/user/useProducerDetail';
import classNames from 'classnames';
import FeedbackList from '../DetailFeedback';
import useProducerCategory from '../../../../../useCustom/user/useProducerCategory';
const DetailInformation = ({ item }) => {
  const { product } = useProducerDetail();
  const { categories } = useProducerCategory();
  if (_.isEmpty(categories)) return;
  if (_.isEmpty(product) || product.status === 'inactive') return;

  const index = categories.filter(
    category => category.id === product.id_category
  );
  if (index.length === 0) return;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles[`wrapper-img`]}>
          <img src={product[`product_image`]} alt="" />
          <div className={styles[`wrapper-statistics`]}>
            <div>{item.rating}</div>
            <div className="text-[rgba(128, 120, 120, 0.7)]">
              <span className="text-black underline font-semibold">
                {item.numberOfReviews}
              </span>{' '}
              Đánh giá
            </div>
            <div className="text-[rgba(128, 120, 120, 0.7)]">
              <span className="text-black font-semibold">
                {item.quantitySold}
              </span>{' '}
              Đã bán
            </div>
          </div>
          <DetailOrder></DetailOrder>
        </div>
        <div className={styles[`wrapper-message`]}>
          <h1 className={styles.title}>{product[`product_name`]}</h1>
          <div
            className={classNames('prose')}
            dangerouslySetInnerHTML={{ __html: product[`product_info`] }}
          ></div>
        </div>
      </div>
      <div></div>
      <hr className="mb-6" />
      <div
        className={classNames('prose')}
        dangerouslySetInnerHTML={{ __html: product[`product_des`] }}
      ></div>

      <FeedbackList></FeedbackList>
    </div>
  );
};
DetailInformation.propTypes = {
  item: PropTypes.object,
};
export default DetailInformation;
