import {
  MdCheckBoxOutlineBlank,
  MdCheckBox, // 나중에 사용할 요소 (체크시)
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../style/TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo; //받아온 요소 디스트럭처링
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
