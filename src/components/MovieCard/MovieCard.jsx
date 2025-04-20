import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ id, title, poster_path }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Link to={`/movies/${id}`} className={styles.card}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};

export default MovieCard;
