import React, { useState } from 'react';

interface MovieItemProps {
  id: number;
  text: string;
  onUpdate: (id: number, value: string) => void;
  onDelete: (id: number) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ id, text, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleUpdate = () => {
    onUpdate(id, editedText);
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className='movie-item'>
      {editing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className='item-input'
          />
          <button onClick={handleUpdate}>Сохранить</button>
        </>
      ) : (
        <>
          <span className='item-name' onClick={() => setEditing(true)} style={{ cursor: 'pointer' }}>
            {text}
          </span>
        </>
      )}
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default MovieItem;
