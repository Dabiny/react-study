import { useReducer } from "react";
import { act } from "react-dom/test-utils";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = (e) => {
        dispatch(e.target);
    }
    
    return [state, onChange];
}

