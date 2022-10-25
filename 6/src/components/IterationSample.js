import { useState } from "react";

// const IterationSample = () => {
//     return (
//         <ul>
//             <li>눈사람</li>
//             <li>얼음</li>
//             <li>눈</li>
//             <li>바람</li>
//         </ul>
//     );
// };

// // li가 반복중이다.

// // map으로 해결하기
// const IterationSample = () => {
//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const nameList = names.map((name, idx)=> <li key={idx}>{name}</li>);
//     return <ul>{nameList}</ul>;
// }

// 6.4.1 state값으로 유동적으로 key값 넣기
const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: "눈사람" },
        { id: 2, text: "눈" },
        { id: 3, text: "얼음" },
        { id: 4, text: "바람" },
    ]);

    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });

        setNextId(nextId + 1);
        setInputText("");
        setNames(nextNames);
    };

    const onRemove = (id) => {
        const removeElem = names.filter((name) => name.id !== id);
        setNames(removeElem);
    };

    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;
