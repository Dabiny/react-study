import { useRef, useCallback, useState } from "react";
import produce from "immer";

function App() {
    const nextId = useRef(1);
    const [form, setForm] = useState({
        username: "",
        name: "",
    });
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });

    // form 등록을 위한 함수
    const onSubmit = useCallback(
        (event) => {
            event.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username,
            };

            // setData({ // immer 사용전
            //     ...data,
            //     array: data.array.concat(info)
            // });

            // setData(
            //     produce(data, (draft) => {
            //         // immer 사용 후
            //         draft.array.push(info);
            //     })
            // );

            setData(
                produce((draft) => {
                    draft.array.push(info);
                })
            );

            setForm({
                username: "",
                name: "",
            });

            nextId.current += 1;
        },
        [data, form.name, form.username] // 배열안에있는 요소가 변경되었을 때만 새로운 함수 호출
    );

    // input 수정을 위한 함수
    const onChange = useCallback(
        (event) => {
            const { name, value } = event.target;

            // setForm({ // immer 사용전
            //     ...form,
            //     [name]: [value] // 디스트럭처링으로 가져온 요소를 이렇게 []:[]식으로 써준다.
            // });

            // setForm(
            //     // immer 사용후
            //     produce(form, (draft) => {
            //         draft[name] = value; // 사본뜬 draft[name]에 value 수정하기.
            //     })
            // );

            setForm(
                produce((draft) => {
                    draft[name] = value; // 사본뜬 draft[name]에 value 수정하기.
                })
            );
        },
        [form]
    );

    const onRemove = useCallback(
        (id) => {
            // setData({ // immer 사용전
            //     ...data,
            //     array: data.array.filter(info => info.id !== id)
            // });

            // setData( // immer 사용후
            //     produce(data, draft => {
            //         draft.array.splice(info => info.id !== id, 1);
            //     })
            // );

            setData(
                // draft만 써서 사용가능. (ExampleCode 참고하기)
                produce((draft) => {
                    draft.array.splice((info) => info.id !== id, 1);
                })
            );
        },
        [data]
    );

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록하기</button>
            </form>
            <div>
                <ul>
                    {data.array.map((info) => (
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
