import React from 'react'
import Todo from './Todo'

export default class Form extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    console.log('You submitted')
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' placeholder='Type todo'></input>
        <input type='submit' onSubmit={this.onSubmit}></input>
        <button>Hide Completed</button>
      </form>

    )
  }
}
