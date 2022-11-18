import { startLoading, finishLoading } from "../modules/loading";
export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`; // ex)'sample/GET_POST'_SUCCESS
    const FAILURE = `${type}_FAILURE`;

    return params => async (dispatch) => { 
        dispatch({ type }); // 시작됨. 
        dispatch(startLoading(type)); // 로딩시작
        try {
            const response = await request(params);
            await dispatch({
                type: SUCCESS,
                payload: response.data
            }); // 성공
            dispatch(finishLoading(type));
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true,
            });
            dispatch(startLoading(type));
            throw e;
        }
    };
}

// 사용법: createRequestThunk('GET_USERS', api.getUsers);

// 미들웨어 기본구조
// function createRequestThunk(type, request) { // 리덕스 스토어에서 인스턴스 가져오기
//     ...
//     return function(params) { // 그다음 처리해야할 미들웨어에게 액션을 넘겨주고, 만약 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다는 것. 
//         return async function(dispatch) { // 디스패치된 액션을 가리킴
//             ...
//         }
//     }
// }