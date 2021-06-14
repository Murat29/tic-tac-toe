import React from 'react';
import './ButtonReset.css';

function ButtonReset({ onClick }) {
  return (
    <button onClick={onClick} className="button-reset">
      Начать заново
    </button>
  );
}

export default ButtonReset;
