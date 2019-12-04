import React from 'react';
import styled from 'styled-components';

const Todo = (props) => {

    const Todo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease 0.3s;
    `

    const Title = styled.h1`
    text-align: center;
    
    `

    const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

    const Done = styled.button `
    margin: 0 auto;
    border: none;
    padding: 3%;
    font-size: 1.3em;
    `
    
    return (
        <div>
            <Title className={`todo${props.completed ? " completed" : "" }`} >{props.title}</Title>
            <Buttons className="buttons">
                <Done className="complete" onClick={e =>props.completedTextHandler(props.item.id)}>Done!</Done>
            </Buttons>
            
        </div>
    );
}

export default Todo;
