import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';


// 한 프젝당 하나의 리듀서만 사용가능. 그래서 여러 리듀서들을 결합해준다. 
const rootReducer = combineReducers({
    counter,
    todos,
})

export default rootReducer;