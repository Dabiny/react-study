import TodoListItem from './TodoListItem';
import '../style/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  ); // map 돌때 요소를 바꿀땐 () => () 형식으로 바꾸기 () => {} xx
};

export default TodoList;
