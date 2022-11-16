import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos"
import { useCallback } from "react";

// const TodosContainer = ({
//     input,
//     todos,
//     changeInput,
//     insert,
//     toggle,
//     remove
// }) => {
//     return (
//         <Todos
//             input={input}
//             todos={todos}
//             changeInput={changeInput}
//             insert={insert}
//             toggle={toggle}
//             remove={remove}
//         />
//     );
// };

// export default connect(
//     ({todos}) => ({
//         input: todos.input,
//         todos: todos.todos
//     }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove
//     },
// )(TodosContainer);


// ⭐️ useSelector, useDispatch로 다시 작성하기
const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos
    }));
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
};

// useSelector, useDispatch를 사용할 경우 connect와 달리 자동으로 최적화작업이
// 이루어지지 않기 때문에 React.memo를 써서 따로 최적화 작업을 해주어야 한다. 
export default React.memo(TodosContainer); 