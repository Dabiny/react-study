import produce from "immer";
import { useCallback, useState } from "react";

const ExampleCode = () => {
    const [number, setNumber] = useState(0);

    // prevNumber는 현재 number값을 가리킨다. 
    const onIncrease = useCallback(
        () => setNumber( prevNumber => prevNumber + 1),
    );
    
    // immer에서 제공하는 produce 함수를 호출시, 첫 번째 파라미터가 함수 형태라면 업데이트 함수를 반환한다. 
    const update = produce(draft => {
        draft.value = 2;
    })
    
    const originalState = {
        value: 1,
        foo: 'bar'
    };

    const nextState = update(originalState);
    console.log(nextState); // { value: 2, foo: 'bar' }
};