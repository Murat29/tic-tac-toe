import React from 'react';
import './Button.css';

function Button({ title, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {title}
    </button>
  );
}

export default Button;
