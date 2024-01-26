import React from 'react';
import MovieApp from './components/MovieApp.tsx';
import JokeApp from './components/JokeApp.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='app'>
      <MovieApp />
      <JokeApp />
    </div>
  );
};

export default App;
