const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할일 목록이 들어있는 객체
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    insert(input);
    changeInput('');
  };

  const onChange = e => changeInput(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}/>
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
            <TodoItem
                todo={todo}
                key={todo.id}
                onToggle={toggle}
                onRemove={remove}
            />
        ))}
      </div>
    </div>
  );
};

export default Todos;
