import React from 'react';
import './inputBox.css';

const InputBox = ({ inputChange, inputValue }) => {
  return (
    <div>
      <input
        className="input"
        placeholder="Input text here"
        type="text"
        onChange={inputChange}
      />
    </div>
  );
};

export default InputBox;
