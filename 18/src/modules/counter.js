import { createAction, handleActions } from "redux-actions";
import { delay, put, select, takeEvery, takeLatest, throttle } from "redux-saga/effects";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// 액션 생성함수. redux-thunk는 액션생성함수를 일반액션객체가 아닌 함수를 반환시켜준다. 
export const increase = createAction(INCREASE); 
export const decrease = createAction(DECREASE);

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록 
// () => undefined를 두 번째 파라미터로 넣어준다. 
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield delay(1000); // 1초 대기
    yield put(increase()); // 특정액션 디스패치
    // select 적용
    const number = yield select(state => state.number); // state는 스토어의 상태를 의미
    console.log(`현재 값(상태넘버값)은 ${number} 입니다.`);
}
function* decreaseSaga() {
    yield delay(1000); // 1초 대기
    yield put(decrease());
}
export function* counterSaga() {
    // takeEvery: 들어오는 모든 액션에 대해 특정작업을 처리해준다. 
    yield takeEvery(INCREASE_ASYNC, increaseSaga);

    // throttle: 아무리 요청이 들어와도 스로틀함수 내부의 초마다 함수를 한번 실행
    // yield throttle(3000, INCREASE_ASYNC, increaseSaga);

    // takeLatest: 기존에 진행중이던 작업이 있다면 취소처리하고 
    // 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// 1초뒤에 increase , decrease (반환된 함수)를 디스패치한다. 
// 리덕스 미들웨어가 이함수를 전달받아 store의 dispatch와 getState를 파라미터로 넣어서 호출해준다. 
// export const increaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(increase()); 
//     }, 1000);
// };
// export const decreaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(decrease());
//     }, 1000);
// };

const initialState = 0; // 초기값 설정. 상태는 꼭 객체일 필요가 없다. 

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
);

export default counter;