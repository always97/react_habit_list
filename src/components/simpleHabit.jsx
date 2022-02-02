import React, { useState } from 'react';

const SimpleHabit = (props) => {
  
  const [count,setCount] = useState(0);

  return (
    <li className='habit'>
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className='habit-btn habit-increase' 
      onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className='habit-btn habit-decrease' 
      onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className='habit-btn habit-delete' 
      onClick={this.handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>

  );
};
export default SimpleHabit;