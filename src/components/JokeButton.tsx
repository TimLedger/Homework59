import React from 'react';

interface JokeButtonProps {
  fetchJoke: () => void;
}

const JokeButton: React.FC<JokeButtonProps> = ({ fetchJoke }) => {
  const handleClick = () => {
    fetchJoke();
  };

  return (
    <button onClick={handleClick} className="joke-button">
      Новая шутка
    </button>
  );
};

export default React.memo(JokeButton);
