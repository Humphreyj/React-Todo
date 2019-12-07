import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';


const TodoList = (props) => {

    const TodoList = styled.div `
    
    padding: 3%;
    margin-top: 5%;
    min-height: 20em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const NoTasks = styled.h1`
    margin-top: 30%:
    vertical-align:middle;
    `

    return (
        <TodoList>
            {
                props.todoData.length === 0 ? <NoTasks>You have no current Tasks!</NoTasks> : props.todoData.map(item => {
                    
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
                // props.todoData.map(item => {
                    
                //     return (
                //         <Todo
                //         item={item}
                //         key ={item.id} 
                //         title={item.title}
                //         completed ={item.completed}
                //         completedTextHandler={props.completedTextHandler}
                //         />
                //     )
                // })
            }
            
        </TodoList>
    );
}

export default TodoList;
