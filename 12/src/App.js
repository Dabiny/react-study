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

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username,
            };

            // setData({
            //     ...data,
            //     array: data.array.concat(info),
            // });

            setData( // produce 사용
              produce(data, draft => {
                draft.array.push(info);
              })
            )

            setForm({
                name: "",
                username: "",
            });

            nextId.current += 1;
        },
        [data, form.name, form.username]
    );

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        // setForm({ ...form, [name]: [value] });
        setForm(
            produce((form, draft) => {
                draft[name] = value;
            })
        );
    }, [form]);

    const onRemove = useCallback((id) => {
        // setData({
        //     ...data,
        //     array: data.array.fillter((info) => info.id !== id),
        // });
        setData(
          produce((data, draft) => {
            draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
          })
        )
    }, [data]);
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
                <button type="submit">등록</button>
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
