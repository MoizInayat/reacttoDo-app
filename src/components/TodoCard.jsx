import React, { useState } from 'react';

export default function TodoCard(props) {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(children);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEditTodo(index, editValue);
    setIsEditing(false);
  };

  return (
    <li className='todoItem'>
      {isEditing ? (
        <input
          type='text'
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <p>{children}</p>
      )}
      <div className='actionNamecontainer'>
        {isEditing ? (
          <button onClick={handleSaveClick}>
            <i className="fa-solid fa-save"></i>
          </button>
        ) : (
          <button onClick={handleEditClick}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        )}
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
