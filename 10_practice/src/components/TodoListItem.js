import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from "react-icons/md";
import "../style/TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { checked, text, id } = todo;
    return (
        <div className="TodoListItem">
            <div className={cn("check-box", { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text"> {text}</div>
            </div>

            <div className="remove-btn" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
 