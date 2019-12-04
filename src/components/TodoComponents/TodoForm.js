import React from 'react';

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
        this.props.addTask(this.state.itemText)
        this.setState({itemText: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <input 
                type="text" 
                name='itemText' 
                value={this.state.itemText} 
                placeholder='Add a task!'
                onChange={this.changeHandler}
                />
                <button type='submit' className="submit">Add task!</button>
                </form>
                <button 
                className="clearCompleted"
                onClick={this.props.clearCompleted}
                >Clear Completed Tasks</button>
            </div>
        );
    }
    
}

export default TodoForm;
