import {
  MdCheckBoxOutlineBlank,
  MdCheckBox, // 나중에 사용할 요소 (체크시)
  MdRemoveCircleOutline,
} from 'react-icons/md';

import '../style/TodoListItem.scss';
import cn from 'classnames'; // 여러개 클래스이름 받아오기

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo; //받아온 요소 디스트럭처링
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick = {() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
