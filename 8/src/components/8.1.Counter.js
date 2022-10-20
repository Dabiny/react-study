import { useState } from "react";

// 함수 컴포넌트에서 상태값을 관리해야 한다면 useState 쓰기 
const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다. 
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
};

export default Counter;