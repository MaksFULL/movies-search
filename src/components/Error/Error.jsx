import React from 'react';
import styles from './Error.module.css';

const Error = ({ status = 'Помилка', message = 'Щось пішло не так' }) => {
  return (
    <div className={styles.error}>
      <p>{status}</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
