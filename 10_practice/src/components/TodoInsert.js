import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "../style/todoInsert.scss";
const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");
    const onSubmit = useCallback(
        (event) => {
            event.preventDefault();
            onInsert(value);
            setValue("");
        },
        [value, onInsert]
    );

    const onChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    return (
        <form className="todo-insert" onSubmit={onSubmit}>
            <input
                value={value}
                onChange={onChange}
                placeholder="할 일을 입력하세요"
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};
export default TodoInsert;
