import React from 'react';
import styles from './Loader.module.css';

const Loading = () => {
  return (
    <div className={styles.loader}>
      <p>Завантаження...</p>
    </div>
  );
};

export default Loading;
