import React from 'react';

interface JokeDisplayProps {
  joke: string;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke }) => {
  return (
    <div className="joke-display">
      <p>{joke}</p>
    </div>
  );
};

export default React.memo(JokeDisplay);
