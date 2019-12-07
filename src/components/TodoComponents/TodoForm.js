import React from 'react';
import styled from 'styled-components';
import './Todo.css';
class TodoForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            itemText: ''
        }
    }

    changeHandler = (event) => {
        this.setState({itemText: event.target.value})
        console.log(event.target.value)
    }

    submitHandler = (event) =>{
        event.preventDefault();
        if(this.state.itemText === '') {
            alert('Add a title for your task!')
        }else {
            this.props.addTask(this.state.itemText)
            this.setState({itemText: ''})
        }
        
    }

    render() {
        

        const Input = styled.input`
        height: 2.2em;
        
        `

        const AddTask = styled.button`
        margin-top: 3%;
        padding: 3%;
        font-size: .9em;
        width: 100%;
        font-family: 'Solway', serif;

        `

        const ClearTasks = styled.button `
        margin-top: 3%;
        padding: 3%;
        font-size: .9em;
        width: 100%;

        `
        return (
            <div className='formDiv'>
                <form onSubmit={this.submitHandler}>
                <input 
                type="text" 
                name='itemText' 
                value={this.state.itemText} 
                placeholder='Add a task!'
                onChange={this.changeHandler}
                />
                <AddTask type='submit' className="submit">Add task!</AddTask>
                </form>
                <ClearTasks 
                className="clearCompleted"
                onClick={this.props.clearCompleted}
                >Clear Completed Tasks</ClearTasks>
            </div>
        );
    }
    
}

export default TodoForm;
