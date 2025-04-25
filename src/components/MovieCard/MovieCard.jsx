import React from 'react';
import { Link } from 'react-router-dom';
import BaseComponent from '../BaseComponent';
import styles from './MovieCard.module.css';

export default class MovieCard extends BaseComponent {
  render() {
    const { id, title, poster_path } = this.props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    this.log(`Rendered card: ${title}`);

    return (
      <Link to={`/movies/${id}`} className={styles.card}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </Link>
    );
  }
}
