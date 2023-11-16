import React, { useState } from "react";
import styled, { css } from "styled-components";

const TodoItemWrapper = styled.li`
    ${(props) =>
        props.done &&
        css`
            text-decoration: line-through;
        `};
`;

function TodoItem({ todo, onToggle }) {
    return (
        <TodoItemWrapper onClick={() => onToggle(todo.id)} done={todo.done}>
            {todo.text}
        </TodoItemWrapper>
    );
}

function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
}

function Todos({ todos, onToggle, onCreate }) {
    const [text, setText] = useState("");
    const onClick = (text) => {
        onCreate(text);
        setText("");
    };

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={onChange}
                placeholder="할 일 입력 "
            ></input>
            <button onClick={() => onClick(text)}>추가</button>
            <hr />
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default Todos;
