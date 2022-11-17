import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// 요청을 위한 액션 타입을 payload로 설정한다.  (예: 'samole/GET_POST')
export const startLoading = createAction(
    START_LOADING,
    requstType => requstType
);

export const finishLoading = createAction(
    FINISH_LOADING,
    requstType => requstType
);

const initialState = {};

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    },
    initialState
)
export default loading;