import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox, // 나중에 사용할 요소 (체크시)
  MdRemoveCircleOutline,
} from 'react-icons/md';

import '../style/TodoListItem.scss';
import cn from 'classnames'; // 여러개 클래스이름 받아오기

// React.memo를 사용시 props가 바뀌었는지 혹은 바뀌지 않았는지를 알아내서
// 리렌더링 성능을 최적화해줄 수 있다. 
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo; //받아온 요소 디스트럭처링
  return (
  <div className='TodoListItem-virtualized' style={style}>
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick = {() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  </div>
  );
};

// todo, onRemove, onToggle이 바뀌지않으면 리렌더링을 하지 않는다. 
export default React.memo(TodoListItem);
