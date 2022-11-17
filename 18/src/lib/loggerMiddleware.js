const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('이전상태', store.getState());
    console.log('액션', action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달. 
    console.log('다음상태', store.getState());
    console.groupEnd();
};
// 미들웨어 기본 구조
export default loggerMiddleware;
