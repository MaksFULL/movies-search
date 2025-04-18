import React from 'react';
import BaseComponent from '../BaseComponent';
import styles from './Loader.module.css';

export default class Loading extends BaseComponent {
  render() {
    return (
      <div className={styles.loader}>
        <p>Завантаження...</p>
      </div>
    );
  }
}
