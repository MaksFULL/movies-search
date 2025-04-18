import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieService from './components/MovieService';
import MovieCard from './components/MovieCard/MovieCard';
import Loading from './components/Loader/Loading';
import Error from './components/Error/Error';
import MovieDetails from './components/MovieDetails/MovieDetails';

const service = new MovieService();

function HomePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  const handleSearch = async (customQuery = query) => {
    if (!customQuery.trim()) return;
    setStatus('loading');
    localStorage.setItem('lastSearch', customQuery); // 💾 Зберігаємо останній пошук
    try {
      const results = await service.fetchMovies(customQuery);
      setMovies(results);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  // 🕓 Відновлюємо останній запит, якщо є
  useEffect(() => {
    const saved = localStorage.getItem('lastSearch');
    if (saved) {
      setQuery(saved);
      handleSearch(saved);
    }
  }, []);

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Пошук фільмів</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введіть назву фільму..."
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '300px',
          marginRight: '10px',
        }}
      />
      <button onClick={() => handleSearch()} style={{ padding: '8px 16px' }}>
        Пошук
      </button>

      {status === 'loading' && <Loading />}
      {status === 'error' && <Error />}
      {status === 'success' && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
