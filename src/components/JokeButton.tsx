import React from 'react';

interface JokeButtonProps {
  fetchJokes: () => void;
}

const JokeButton: React.FC<JokeButtonProps> = ({ fetchJokes }) => {
  const handleClick = () => {
    fetchJokes();
  };

  return (
    <button onClick={handleClick} className="joke-button">
      Новые шутки
    </button>
  );
};

export default React.memo(JokeButton);
