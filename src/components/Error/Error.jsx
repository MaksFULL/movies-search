import React from 'react';
import BaseComponent from '../BaseComponent';
import styles from './Error.module.css';

export default class Error extends BaseComponent {
  render() {
    return (
      <div className={styles.error}>
        <p>Сталася помилка</p>
        <p>Спробуйте ще раз</p>
      </div>
    );
  }
}
