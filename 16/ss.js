const initialState = { // 초기상태를 가지고 있는 객체
    counter: 1
};

// 현재 상태 = 초기상태객체, action값 (어떤동작을 수행할 명령값)
function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            };
            break;
        default:
            return state;
    }
}