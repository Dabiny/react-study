import { useState, useRef, useCallback, useReducer } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// 최적화 방법2: useReducer 쓰기
// useReducer: 컴포넌트 상황에 따라 다양하게 업데이트를 해주고 싶을 떄 
function todoReducer(todos, action) { // (현재 상태, 업데이트를 위해 필요한 정보)
  switch (action.type) {
    case 'INSERT': // 새로 추가
      // action => { type: 'INSERT', todo: {id: 1, text: 'todo', checked: false}}
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      // action => {type: 'REMOVE', id: 1}
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': // 토글
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  //  const [todos, setTodos] = useState(createBulkTodos);

  // useReducer
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 아이디, ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      //setTodos((todos) => todos.concat(todo)); // 최적화 방법1 : useState함수업데이트정의 사용예시
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1; //1씩 더하기
    },
    [], // 업데이트 정의를 했으면 배열은 빈배열로 정의.
  );

  const onRemove = useCallback((id) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id)); // useState함수업데이트정의 사용예시
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
    dispatch ({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
