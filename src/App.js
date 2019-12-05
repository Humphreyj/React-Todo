import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {



  constructor() {
    super();

    this.state={
      todos: [
        {
          id: 1,
          title: 'Walk Dog',
          completed: false
        },
        {
          id: 2,
          title: 'Eat Something',
          completed: false
        },
        {
          id: 3,
          title: 'Practice learning.',
          completed: false
        }
      ]
    }


    

  }

  completedTextHandler = (itemId) => {
    
    this.setState({
      todos: this.state.todos.map(item => {
        console.log(item)
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item
      })
    })
  }

  addTask = (itemText) => {
    const newTask = {
      title: itemText,
      completed: false,
      id: Date.now()
    }

    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

  clearCompleted = () => {
   let filteredTodos = this.state.todos.filter(item => {
      return item.completed === false;
    })

    this.setState({
      todos: filteredTodos
    })
  }


  render() {
    const AppWrap =  styled.div
    `
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 8%;
    min-height: 16em;
    `
    return (
      <AppWrap>
        <TodoList
        todoData={this.state.todos}
        completedTextHandler={this.completedTextHandler}
        />
        <TodoForm 
        addTask={this.addTask}
        clearCompleted={this.clearCompleted}
        />
        
      </AppWrap>
    );
  }
}

export default App;
