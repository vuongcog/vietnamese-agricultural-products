import React from 'react';
import styles from './ProductDetail.module.scss';
import ProductDes from '../ProductDes';
import ProductInfo from '../ProductInfo';

const ProductDetail = () => {
  const product = {
    id: 14,
    id_category: 6,
    product_name: 'N\u1ea5m m\u00e8o',
    product_slug: 'nam-meo',
    product_image: 'http://127.0.0.1:8000/img/nam-meo-thai-soi.jpg',
    product_des:
      '<h3>Th\u00e0nh Ph\u1ea7n Dinh D\u01b0\u1ee1ng</h3><p>N\u1ea5m m\u00e8o s\u1ea5y kh\u00f4 ch\u1ee9a nhi\u1ec1u d\u01b0\u1ee1ng ch\u1ea5t nh\u01b0:</p><ul><li><strong>Protein</strong>: Cung c\u1ea5p n\u0103ng l\u01b0\u1ee3ng v\u00e0 h\u1ed7 tr\u1ee3 x\u00e2y d\u1ef1ng c\u01a1 b\u1eafp.</li><li><strong>Ch\u1ea5t x\u01a1</strong>: H\u1ed7 tr\u1ee3 ti\u00eau h\u00f3a v\u00e0 gi\u00fap duy tr\u00ec s\u1ee9c kh\u1ecfe ru\u1ed9t.</li><li><strong>Ch\u1ea5t ch\u1ed1ng oxy h\u00f3a</strong>: Gi\u00fap b\u1ea3o v\u1ec7 t\u1ebf b\u00e0o kh\u1ecfi s\u1ef1 h\u1ee7y ho\u1ea1i c\u1ee7a c\u00e1c g\u1ed1c t\u1ef1 do.</li><li><strong>Vitamin</strong>: Bao g\u1ed3m vitamin B2 (riboflavin) v\u00e0 B3 (niacin), h\u1ed7 tr\u1ee3 qu\u00e1 tr\u00ecnh trao \u0111\u1ed5i ch\u1ea5t.</li><li><strong>Kho\u00e1ng ch\u1ea5t</strong>: Bao g\u1ed3m s\u1eaft, magi\u00ea, v\u00e0 canxi.</li></ul><h3>C\u00f4ng D\u1ee5ng</h3><ul><li><strong>T\u0103ng c\u01b0\u1eddng mi\u1ec5n d\u1ecbch</strong>: Ch\u1ee9a c\u00e1c h\u1ee3p ch\u1ea5t gi\u00fap t\u0103ng c\u01b0\u1eddng h\u1ec7 mi\u1ec5n d\u1ecbch.</li><li><strong>H\u1ed7 tr\u1ee3 ti\u00eau h\u00f3a</strong>: Ch\u1ee9a nhi\u1ec1u ch\u1ea5t x\u01a1 gi\u00fap c\u1ea3i thi\u1ec7n ti\u00eau h\u00f3a v\u00e0 ng\u0103n ng\u1eeba t\u00e1o b\u00f3n.</li><li><strong>T\u1ed1t cho tim m\u1ea1ch</strong>: Ch\u1ea5t x\u01a1 v\u00e0 ch\u1ea5t ch\u1ed1ng oxy h\u00f3a gi\u00fap duy tr\u00ec s\u1ee9c kh\u1ecfe tim m\u1ea1ch.</li><li><strong>L\u00e0m s\u1ea1ch m\u00e1u</strong>: N\u1ea5m m\u00e8o c\u00f3 kh\u1ea3 n\u0103ng l\u00e0m s\u1ea1ch m\u00e1u, lo\u1ea1i b\u1ecf \u0111\u1ed9c t\u1ed1 v\u00e0 c\u1ea3i thi\u1ec7n tu\u1ea7n ho\u00e0n m\u00e1u.</li><li><strong>C\u1ea3i thi\u1ec7n s\u1ee9c kh\u1ecfe x\u01b0\u01a1ng</strong>: Ch\u1ee9a nhi\u1ec1u canxi v\u00e0 kho\u00e1ng ch\u1ea5t t\u1ed1t cho x\u01b0\u01a1ng.</li></ul><h3>C\u00e1ch S\u1eed D\u1ee5ng</h3><ul><li><strong>Ng\u00e2m n\u01b0\u1edbc</strong>: Tr\u01b0\u1edbc khi s\u1eed d\u1ee5ng, n\u1ea5m m\u00e8o s\u1ea5y kh\u00f4 n\u00ean \u0111\u01b0\u1ee3c ng\u00e2m trong n\u01b0\u1edbc \u1ea5m t\u1eeb 20-30 ph\u00fat \u0111\u1ec3 n\u1edf ra v\u00e0 tr\u1edf l\u1ea1i tr\u1ea1ng th\u00e1i m\u1ec1m nh\u01b0 n\u1ea5m t\u01b0\u01a1i.</li><li><strong>Ch\u1ebf bi\u1ebfn m\u00f3n \u0103n</strong>: N\u1ea5m m\u00e8o s\u1ea5y kh\u00f4 c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong nhi\u1ec1u m\u00f3n \u0103n nh\u01b0 s\u00fap, m\u00f3n x\u00e0o, g\u1ecfi, ch\u1ea3 gi\u00f2, ho\u1eb7c l\u00e0m nguy\u00ean li\u1ec7u trong c\u00e1c m\u00f3n h\u1ea7m v\u00e0 canh.</li><li><strong>Topping</strong>: D\u00f9ng n\u1ea5m m\u00e8o \u0111\u1ec3 trang tr\u00ed v\u00e0 t\u0103ng th\u00eam h\u01b0\u01a1ng v\u1ecb cho c\u00e1c m\u00f3n \u0103n.</li></ul><h3>B\u1ea3o Qu\u1ea3n</h3><ul><li><strong>\u0110\u00f3ng g\u00f3i</strong>: N\u00ean \u0111\u00f3ng g\u00f3i k\u00edn trong t\u00fai nh\u1ef1a ho\u1eb7c h\u1ed9p \u0111\u1ef1ng th\u1ef1c ph\u1ea9m \u0111\u1ec3 tr\u00e1nh \u1ea9m.</li><li><strong>L\u01b0u tr\u1eef</strong>: B\u1ea3o qu\u1ea3n n\u01a1i kh\u00f4 r\u00e1o, tho\u00e1ng m\u00e1t v\u00e0 tr\u00e1nh \u00e1nh n\u1eafng tr\u1ef1c ti\u1ebfp. C\u00f3 th\u1ec3 b\u1ea3o qu\u1ea3n trong t\u1ee7 l\u1ea1nh ho\u1eb7c n\u01a1i c\u00f3 nhi\u1ec7t \u0111\u1ed9 th\u1ea5p \u0111\u1ec3 k\u00e9o d\u00e0i th\u1eddi gian s\u1eed d\u1ee5ng.</li><li><br></li></ul>',
    product_info:
      '<p>N\u1ea5m m\u00e8o, c\u00f2n \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 m\u1ed9c nh\u0129 hay n\u1ea5m tai m\u00e8o, l\u00e0 m\u1ed9t lo\u1ea1i n\u1ea5m \u0103n ph\u1ed5 bi\u1ebfn trong \u1ea9m th\u1ef1c ch\u00e2u \u00c1. N\u1ea5m m\u00e8o s\u1ea5y kh\u00f4 l\u00e0 phi\u00ean b\u1ea3n b\u1ea3o qu\u1ea3n l\u00e2u d\u00e0i c\u1ee7a n\u1ea5m m\u00e8o t\u01b0\u01a1i, gi\u1eef l\u1ea1i \u0111\u01b0\u1ee3c h\u01b0\u01a1ng v\u1ecb v\u00e0 gi\u00e1 tr\u1ecb dinh d\u01b0\u1ee1ng. D\u01b0\u1edbi \u0111\u00e2y l\u00e0 th\u00f4ng tin v\u00e0 m\u00f4 t\u1ea3 chi ti\u1ebft v\u1ec1 n\u1ea5m m\u00e8o s\u1ea5y kh\u00f4:</p><h3>Th\u00f4ng Tin Chung</h3><ul><li><strong>T\u00ean s\u1ea3n ph\u1ea9m</strong>: N\u1ea5m m\u00e8o s\u1ea5y kh\u00f4 (Wood ear mushrooms)</li><li><strong>Nguy\u00ean li\u1ec7u</strong>: N\u1ea5m m\u00e8o t\u01b0\u01a1i</li><li><strong>Quy tr\u00ecnh ch\u1ebf bi\u1ebfn</strong>:</li><li class="ql-indent-1"><strong>Ch\u1ecdn nguy\u00ean li\u1ec7u</strong>: Ch\u1ecdn nh\u1eefng c\u00e2y n\u1ea5m m\u00e8o t\u01b0\u01a1i, kh\u00f4ng b\u1ecb h\u01b0 h\u1ecfng.</li><li class="ql-indent-1"><strong>R\u1eeda s\u1ea1ch v\u00e0 c\u1eaft b\u1ecf g\u1ed1c</strong>: L\u00e0m s\u1ea1ch n\u1ea5m v\u00e0 c\u1eaft b\u1ecf ph\u1ea7n g\u1ed1c c\u1ee9ng.</li><li class="ql-indent-1"><strong>S\u1ea5y kh\u00f4</strong>: S\u1ea5y n\u1ea5m b\u1eb1ng ph\u01b0\u01a1ng ph\u00e1p s\u1ea5y nhi\u1ec7t (s\u1ea5y n\u00f3ng ho\u1eb7c s\u1ea5y l\u1ea1nh) \u0111\u1ec3 lo\u1ea1i b\u1ecf \u0111\u1ed9 \u1ea9m nh\u01b0ng v\u1eabn gi\u1eef \u0111\u01b0\u1ee3c h\u01b0\u01a1ng v\u1ecb v\u00e0 c\u00e1c d\u01b0\u1ee1ng ch\u1ea5t.</li><li class="ql-indent-1"><br></li></ul>',
    quantity: 23,
    unit_prices: '559000.000',
    status: 'active',
    created_at: '2024-07-30T18:06:06.000000Z',
    updated_at: '2024-07-30T18:09:07.000000Z',
  };
  return (
    <div className={styles.layout}>
      <div className={styles[`background-detail`]}></div>
      <div className={styles.profileContainer}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={product.product_image}
            alt={`Avatar of ${product.product_name}`}
          />
        </div>
        <h2 className={styles.name}>{product.product_name}</h2>
        {/* <p className={styles.email}>{user.email}</p> */}
        <span
          className={`${styles.badge} ${
            product.status === 'active' ? styles.active : styles.inactive
          }`}
        >
          {product.status}
        </span>
        <div className={styles.info}>
          <p>
            <strong>Unit price:</strong>{' '}
            {parseFloat(product.unit_prices).toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>

          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>
          <div className="flex gap-1 items-center">
            <strong>Description:</strong>{' '}
            {<ProductDes product_des={product.product_des}></ProductDes>}
          </div>
          <div className="flex gap-1 items-center">
            <strong>Information:</strong>{' '}
            {<ProductInfo product_info={product.product_info}></ProductInfo>}
          </div>
          <p>
            <strong>Created at:</strong>{' '}
            {new Date(product.created_at).toLocaleString()}
          </p>
          <p>
            <strong>Updated at:</strong>{' '}
            {new Date(product.updated_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
