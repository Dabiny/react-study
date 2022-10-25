import { MdAdd } from 'react-icons/md';
import '../style/TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => { // onInsert 부모로부터 받아온 이벤트함수
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback (
    (e) => {
        onInsert(value);
        setValue(''); // onInsert에 값을 넣었으니 초기화해줌
        
        // submit 이벤트는 브라우저에서 새로고침을 발생한다. 이를 방지하기위해 이 함수 호출
        e.preventDefault();
    },
    [onInsert, value] // onInsert와 value값이 변경시에만 함수 생성
  );
  
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

//
