import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoading, startLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

// 액션타입을 선언한다.
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";


// thunk 함수 생성. (액션생성함수)
// thunk 함수는 내부에서 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.
// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST }); // 요청을 시작한 것을 알린다.
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             // payload: response.data,
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true,
//         }); // 에러 발생
//         throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해준다.
//     }
// };
// export const getUsers = () => async (dispatch) => {
//     dispatch({ type: GET_USERS });
//     try {
//         const response = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             // payload: response.data,
//         }); // 요청 성공
//     } catch (e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//         }); // 요청 실패
//         throw e;
//     }
// };

// ⭐️createRequestThunk 사용 (리팩토링)
// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// saga 사용 (액션함수 생성)
export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

// function* getPostSaga(action) {
//     yield put(startLoading(GET_POST)); // 로딩 시작
//     // param으로 action을 받아오면 액션의 정보를 조회할 수 있다. 
//     try {
//         // call 사용하면 Promise를 반환하는 함수를 호출하고 기다릴 수 있다. 
//         // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수다. 
//         const post = yield call(api.getPost, action.payload); // api.getPost(action.pay-load)의미
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: post.data
//         });
//     } catch(e) {
//         yield put({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true,
//         });
//     }
//     yield put(finishLoading(GET_POST)); // 로딩 완료
// }
// function* getUsersSaga() {
//     yield put(startLoading(GET_USERS));
//     try {
//         const users = yield call(api.getUsers);
//         yield put({
//             type: GET_USERS_SUCCESS,
//             payload: users.data
//         });
//     } catch (e) {
//         yield put({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         })
//     }
//     yield put(finishLoading(GET_USERS));
// } 

// createRequestSaga(리팩토링)적용하기
const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

// 초기상태 선언.
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.
const initialState = {
    // loading: {
    //     GET_POST: false,
    //     GET_USERS: false,
    // },
    post: null,
    users: null,
};

// 리듀서만들기
const sample = handleActions(
    {
        // [GET_POST]: (state) => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_POST: true, // 요청 시작
        //     },
        // }),

        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false, // 요청 완료여서 다시 false로 바꿈.
            },
            post: action.payload, //바뀔 값
        }),

        // [GET_POST_FAILURE]: (state, action) => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_POST: false,
        //     },
        // }),

        // [GET_USERS]: (state) => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_USERS: true,
        //     },
        // }),

        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false,
            },
            users: action.payload,
        }),

        // [GET_USERS_FAILURE]: (state, action) => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_USERS: false,
        //     },
        // }),
    },
    initialState
);
export default sample;
