import { createAction, handleActions } from "redux-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수. redux-thunk는 액션생성함수를 일반액션객체가 아닌 함수를 반환시켜준다. 
export const increase = createAction(INCREASE); 
export const decrease = createAction(DECREASE);
// const incrase = x => () => createAction(INCREASE, x);

// 1초뒤에 increase , decrease (반환된 함수)를 디스패치한다. 
// 리덕스 미들웨어가 이함수를 전달받아 store의 dispatch와 getState를 파라미터로 넣어서 호출해준다. 
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase()); 
    }, 1000);
};
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

const initialState = 0; // 초기값 설정. 상태는 꼭 객체일 필요가 없다. 

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
);

export default counter;