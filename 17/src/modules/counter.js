import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의 -> 모듈이름 / 액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// // 액션 생성 함수 만들기 export를 붙여서 내보낼 것. -> 추후 이함수를 다른파일에서 불러와 사용가능.
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// createAction 적용 (redux-actions 라이브러리)
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

// // 리듀서 만들기
// function counter(state = initialState, action) {
//     switch(action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1
//             };
//         case DECREASE:
//             return {
//                 number : state.number - 1
//             };
//         default:
//             return state;
//     }
// };

// export default counter; // 리듀서 함수 내보내기

// redux-actions 라이브러리 handleActions 사용하여 리듀서 더편하게 쓰기
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);
export default counter;


// export -> 여러개를 내보낼 수 있다.
// export default -> 단 한 개만 내보낼 수 있다.

// 불러오는 방식도 다르다.
