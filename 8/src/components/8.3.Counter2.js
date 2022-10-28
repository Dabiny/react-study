// useReducer 사용하기
import { useReducer } from "react";

// function reducer(state, action) {
//     // action.type에 따라 다른 작업 수행
//     switch(action.type) {
//         case 'INCREMENT':
//             return {value: state.value + 1};
//         case 'DECREMENT':
//             return {value: state.value - 1};
//         default:
//             return state;
//     }
// }

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Counter2 = () => {
    //const [state, dispatch] = useReducer(reducer, {value: 0});

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    
    const { name, nickname } = state;
    const onChange = (e) => {
        console.log(e.target);
        dispatch(e.target);
    };

    // return (
    //     <div>
    //         <p>
    //             현재 카운터 값은 <b>{state.value}</b>입니다. 
    //         </p>
    //         <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
    //         <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    //     </div>
    // )

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
};

export default Counter2;
