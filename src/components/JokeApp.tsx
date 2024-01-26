import React, { useState, useEffect } from 'react';
import JokeButton from './JokeButton';
import JokeDisplay from './JokeDisplay';
import './JokeApp.css';

const JokeApp: React.FC = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className='joke-app'>
      <JokeDisplay joke={joke} />
      <JokeButton fetchJoke={fetchJoke} />
    </div>
  );
};

export default JokeApp;
