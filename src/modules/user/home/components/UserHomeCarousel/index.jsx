import { Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { PICTURE } from '../../../../../constants/picture';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
const images = [PICTURE.welcom, PICTURE.welcom]; // Danh sách các hình ảnh trong carousel

function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.wrapperTitle}>
          <h1 className={styles.title}>Nông sản sấy khô</h1>
          {/* <h2 className={styles.subtitle}>Dried agricultural products Shop</h2> */}
          <div className={styles.description}>
            Nông sản sấy khô là những sản phẩm nông nghiệp được xử lý thông qua
            quá trình sấy khô để loại bỏ nước, giúp bảo quản lâu hơn mà không
            cần dùng đến chất bảo quản hóa học. Quy trình này không chỉ giúp duy
            trì giá trị dinh dưỡng của sản phẩm mà còn làm tăng hương vị và độ
            giòn. Các loại nông sản sấy khô phổ biến bao gồm trái cây, rau củ,
            và thảo mộc. Chúng thường được sử dụng làm món ăn nhẹ, nguyên liệu
            nấu ăn, hoặc làm quà tặng.
          </div>
          <div className={styles.buttonContainer}>
            {/* <button className={styles.button}>Contact Us</button> */}
            <button
              onClick={() => {
                navigate('/shopping');
              }}
              className={styles.button}
            >
              Sản phẩm
            </button>
          </div>
        </div>
        {images.map((image, index) => (
          <Image
            className={styles.picture}
            key={index}
            src={image}
            alt={`Slide ${index}`}
            display={index === currentIndex ? 'block' : 'none'}
            transition="opacity 0.5s ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;
