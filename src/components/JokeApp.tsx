import React, { useState, useEffect } from 'react';
import JokeButton from './JokeButton';
import JokeDisplay from './JokeDisplay';
import './JokeApp.css';

const JokeApp: React.FC = () => {
  const [jokes, setJokes] = useState<string[]>([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const jokePromises = Array.from({ length: 5 }, () =>
        fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json())
      );

      const jokeResponses = await Promise.all(jokePromises);
      const newJokes = jokeResponses.map((joke) => joke.value);
      setJokes(newJokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <div className='joke-app'>
      <JokeButton fetchJokes={fetchJokes} />
      <h2 className='joke-title'>Шутки Чака Норриса:</h2>
      {jokes.map((joke, index) => (
        <JokeDisplay key={index} joke={joke} />
      ))}      
    </div>
  );
};

export default JokeApp;
