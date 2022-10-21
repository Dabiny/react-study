import { useState, useMemo /*추가*/, useCallback, useRef } from "react";

const getAverage = (numbers) => {
    console.log('평균값 계산중...');
    if(numbers.length === 0) return;
    let nums = numbers.reduce((a, b) => a + b);
    return nums / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(0);
    const inputEl = useRef(null);

    // useCallback 사용
    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number, list가 바뀌었을 때만 함수 생성

    // useMemo사용
    const avg = useMemo(() => getAverage(list), [list]);
    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>
                등록
            </button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* <b>평균값: </b> {getAverage(list)} */}
                <b>평균값: </b> {avg} 
            </div>
        </div>
    );
}

export default Average;