import "../src/App.css";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useCallback, useState, useRef } from "react";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            checked: false,
            text: "리액트 기초 알아보기",
        },
        {
            id: 2,
            checked: true,
            text: "자스 기초 알아보기",
        },
        {
            id: 3,
            checked: false,
            text: "css 기초 알아보기",
        },
    ]);
    let nextId = useRef(4);

    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId++;
        },
        [todos]
    );
    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    const onToggle = useCallback((id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    }, [todos]);

    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList
                    todos={todos}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            </TodoTemplate>
        </div>
    );
}

export default App;
