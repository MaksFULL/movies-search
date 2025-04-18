import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { detailsMovie } from '../../services/api';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await detailsMovie(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  if (!movie)
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Завантаження...</p>;

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '900px',
        margin: '40px auto',
        gap: '30px',
        alignItems: 'flex-start',
        fontFamily: 'sans-serif',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#f8f8f8',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        position: 'relative',
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '6px 12px',
          background: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        ⬅ Назад до пошуку
      </button>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: '300px',
          borderRadius: '12px',
          boxShadow: '0 0 8px rgba(0,0,0,0.2)',
        }}
      />
      <div>
        <h2 style={{ marginBottom: '10px', color: '#333' }}>{movie.title}</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
          <strong>Опис:</strong> <br />
          {movie.overview || 'Опис недоступний українською.'}
        </p>
        <p style={{ fontSize: '15px', marginBottom: '10px' }}>
          <strong>Дата виходу:</strong> {movie.release_date}
        </p>
        <p style={{ fontSize: '15px' }}>
          <strong>Рейтинг:</strong> {movie.vote_average}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
