import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
    // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
    // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
    const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
