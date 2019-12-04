import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {
                props.todoData.map(item => {
                    
                    return (
                        <Todo
                        item={item}
                        key ={item.id} 
                        title={item.title}
                        completed ={item.completed}
                        completedTextHandler={props.completedTextHandler}
                        />
                    )
                })
            }
            
        </div>
    );
}

export default TodoList;
