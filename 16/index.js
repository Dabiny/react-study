const { createStore } = require("redux");

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션값
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 프로젝트에서 사용할 초깃값 정의해주기 (초기값 형태는 자유다. 숫자일수도 객체일수도 문자열일수도 있음.)
const initialState = {
    toggle: false,
    counter: 0,
};

// 리듀서 정의. (변화를 일으키는 함수)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성을 유지해야 한다.
                toggle: !state.toggle,
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
};

// 스토어 생성
const store = createStore(reducer);

// render 함수 만들기 상태가 업데이트 될 때마다 호출된다. 
const render = () => {
    const state = store.getState(); // 현재 상태를 불러온다. 

    if(state.toggle) {
        divToggle.classList.add('active');
    }
    else {
        divToggle.classList.remove('active');
    }

    counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
    store.dispatch(decrease());
};
