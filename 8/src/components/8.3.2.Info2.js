import { useState, useEffect, useReducer } from "react";

function reducer(state, action) { // 인자로 받은 e.target은 action에 저장됨.
    return {
        ...state, // 기존 상태를 spread로 사본 만들고
        [action.name]: action.value, // 바뀐부분만 바꿔치기
        // action.name === input name="..."
        // action.value === input value = {...}
    };
}

const Info2 = () => {
    // const [name, setName] = useState("");
    // const [nickname, setNickname] = useState("");

    const [state, dispatch] = useReducer(reducer, {
        name: "",
        nickname: "",
    });

    const {name, nickname} = state; // state에서 name, nickname 가져오기

    const onChange = (e) => { //onChange를 누르면 
        dispatch(e.target); // dispatch 함수호출 (reducer함수가 호출)
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>

            <div>
                <b>이름: </b> {name}
            </div>
            <div>
                <b>닉네임: </b> {nickname}
            </div>
        </div>
    );
};

export default Info2;
