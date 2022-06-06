import React, { Component } from 'react';
import AddForm from './addForm';
import Habit from './habit';

class Habits extends Component {
  
  handleIncrement = habit => {
    this.props.onIncrement(habit);
  }
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = name => {
    this.props.onAdd(name);
  };

  handleLocation = () => {
    this.props.getLocation();
  }

  render() {

    const {habits} = this.props;
    return (
      <>
        <AddForm onAdd={this.handleAdd}/>
        <button onClick={this.handleLocation}>위도경도 버튼!</button>
        <ul>
          {
            habits.map (habit => (
              <Habit 
              key={habit.id} 
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              />
            ))}
        </ul>
        <button className='habits-reset' onClick={this.props.onReset}>ALL RESET</button>
      </>
    );
  }
}

export default Habits;