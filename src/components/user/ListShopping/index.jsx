import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styles from "./styles.module.scss";
import { document } from "postcss";
const ListShoping = ({ items }) => {
  // const [scrolledToBottom, setScrolledToBottom] = useState(false);

  // const handleScroll = () => {
  //   const scrollTop =
  //     (document.documentElement && document.documentElement.scrollTop) ||
  //     document.body.scrollTop;
  //   const scrollHeight =
  //     (document.documentElement && document.documentElement.scrollHeight) ||
  //     document.body.scrollHeight;
  //   const clientHeight =
  //     document.documentElement.clientHeight || window.innerHeight;
  //   const scrolledToBottom =
  //     Math.ceil(scrollTop + clientHeight) >= scrollHeight;

  //   if (scrolledToBottom) {
  //     setScrolledToBottom(true);
  //   } else {
  //     setScrolledToBottom(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const __renderCard = (item) => {
    return <Card key={item.title} item={item}></Card>;
  };

  const __renderListProduct = (items) => {
    console.log(items);
    return (
      <div className={styles[`list-product-container`]}>
        {items.map((item) => {
          return __renderCard(item);
        })}
      </div>
    );
  };
  return <div className={styles.content}>{__renderListProduct(items)}</div>;
};
ListShoping.propTypes = {
  items: PropTypes.string,
};

export default ListShoping;
