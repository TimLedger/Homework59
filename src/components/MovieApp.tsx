import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import './MovieApp.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState<{ id: number; text: string }[]>([]);
  const [newMovie, setNewMovie] = useState('');

  useEffect(() => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  const addMovie = () => {
    if (newMovie.trim() === '') return;
    
    const newMovies = [...movies, { id: Date.now(), text: newMovie }];
    setMovies(newMovies);
    saveMovies(newMovies);
    setNewMovie('');
  };

  const updateMovie = (id: number, value: string) => {
    const newMovies = movies.map(movie => (movie.id === id ? { ...movie, text: value } : movie));
    setMovies(newMovies);
    saveMovies(newMovies);
  };

  const deleteMovie = (id: number) => {
    const newMovies = movies.filter(movie => movie.id !== id);
    setMovies(newMovies);
    saveMovies(newMovies);
  };

  const saveMovies = (moviesToSave: { id: number; text: string }[]) => {
    localStorage.setItem('movies', JSON.stringify(moviesToSave));
  };

  return (
    <div>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Введите фильм"
      />
      <button onClick={addMovie}>Добавить</button>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          text={movie.text}
          onUpdate={updateMovie}
          onDelete={deleteMovie}
        />
      ))}
    </div>
  );
};

export default App;
