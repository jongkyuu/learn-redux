import React, { useState } from "react";
import styled, { css } from "styled-components";

// 프리젠테이셔널 컴포넌트
const TodoItemWrapper = styled.li`
    ${(props) =>
        props.done &&
        css`
            text-decoration: line-through;
        `};
`;

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
    return (
        <TodoItemWrapper onClick={() => onToggle(todo.id)} done={todo.done}>
            {todo.text}
        </TodoItemWrapper>
    );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
});

function Todos({ todos, onToggle, onCreate }) {
    const [text, setText] = useState("");
    // const onClick = (text) => {
    //     onCreate(text);
    //     setText("");
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText("");
    };

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    onChange={onChange}
                    placeholder="할 일 입력"
                />
                <button type="submit">등록</button>
                {/* <button onClick={() => onClick(text)}>추가</button> */}
            </form>

            <hr />
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default React.memo(Todos);
