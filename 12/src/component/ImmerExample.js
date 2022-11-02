import produce from "immer";

const originalState = [
    {
        id: 1,
        todo: '전개 연산자와 배열 내장함수',
        checked: true,
    },
    {
        id: 2,
        todo: 'immer로 불변성 유지하기',
        checked: false,
    },
];

const nextState = produce(originalState, draft => { // ( 수정하고 싶은 상태, 어떻게 업데이트할지 정의하는 함수)
    const todo = draft.find(t => t.id === 2); // find메서드는 배열이아닌 요소를 반환한다. 
    todo.checked = true; // 혹은, draft[1].checked = true;

    draft.push({
        id: 3,
        todo: '일정 관리 앱에 immer 적용하기',
        checked: false,
    });

    // id가 1인 항목 제거하기 
    draft.splice(draft.findIndex(t => t.id === 1), 1);
    // 어떻게 업뎃할지 정의하는 함수 draft는 originalState를 사본떠서 가지고 있음 거기다가 수정을 하는 느낌. 

});