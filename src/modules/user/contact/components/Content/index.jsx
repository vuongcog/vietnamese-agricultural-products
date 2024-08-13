import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
const Content = ({ title, message, stylesTitle, stylesMessage }) => {
  return (
    <div className={styles.container}>
      <span className={classNames(styles.title, stylesTitle)}>{title}</span>
      <span className={classNames(styles.message, stylesMessage)}>
        {message}
      </span>
    </div>
  );
};

export default Content;
