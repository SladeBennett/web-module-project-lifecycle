import React from 'react'
import TodoList from './TodoList';
import Form from './Form'
import axios from 'axios';

const url = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [],
  }

  fetchAllTodos = () => {
    axios.get(url)
      .then(res => {
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(err => {
        debugger
      })
  }

  componentDidMount() {
   this.fetchAllTodos()
  }

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        {
          this.state.todos.map(td => {
            return <div key={td.id}>{td.name}</div>
          })
        }
      </div>
    )
  }
}
