import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋값을 변경
const INSERT = 'todos/INSERT'; // 새로운 todos 등록
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/ 체크 해제함.
const REMOVE = 'todos/REMOVE'; // todo를 제거함.

// 액션 생성함수 만들기 (전)
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// createAction 활용 (후)
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert가 호출될 때마다 1씩 더해진다.
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++, // 아뒤
//     text, // 텍스트 내용
//     done: false, // 토글 체크 여부
//   },
// });
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// export const toggle = (id) => ({
//   // id만으로 토글을 움직일 수 있나..? 의문점
//   type: TOGGLE,
//   id,
// });
export const toggle = createAction(TOGGLE, (id) => id);

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우는 중',
      done: true,
    },
    {
      id: 2,
      text: '아직은 잘 모르겠어요',
      done: false,
    },
  ],
};

// function todos(state = initialState, action) {
//     switch(action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state, // 그대로인 요소는 스프레드로 불변성유지 후
//                 input: action.input // 바뀔 인풋 집어넣기
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo) // 배열을 다룰땐 내장함수 concat(바뀔 투두요소) 붙이기
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) => todo.id === action.id ? {...todo, done: !todo.done } : todo)
//                 // 새로운 배열만들기
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.id)
//                 // 새로운 배열만드는데 특정요소 빼고 만들기
//             };
//         default:
//             return state;
//     }
// }

// handleActions 리듀서 사용. 모든 추가 데이터값이 payload면 헷갈리니 디스트럭처링을 통해 명시해주도록 하자.
// immer 라이브러리 적용. produce 함수를 사용해 스프레드문법 대신 깊어지는 객체의 불변성을 유지해주자.
const todos = handleActions(
  {
    [CHANGE_INPUT]: (
      state,
      { payload: input }, // (현재 값, 바뀔 액션의 payload 데이터값)
    ) =>
      // { ...state, input: input }
      produce(state, (draft) => {
        // ...state대신 스는 현재값, (바뀔 도안) => 바뀔 도안의 input에 = 바뀔액션 input값을 넣기
        draft.input = input;
      }),

    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),

    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),

    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
); // 초기값은 두번째 인자로 명시

export default todos;
