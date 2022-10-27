const array = [1, 2, 3, 4, 5];

// 배열을 복사하는 것이 아닌 똑같은 배열을 가리키고 있다.
const nextArrayBad = array; 
nextArrayBad[0] = 100;
console.log(array === nextArrayBad); // true

// 배열 내부의 값을 모두 복사한다.
const nextArrayGood = [...array];
nextArrayGood[0] = 100;
console.log(array === nextArrayGood); // false

const object = {
    foo: 'bar',
    value: 1
};

// 객체가 복사되지 않고 똑같은 객체를 가리킴.
const nextObjectBad = object; 
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad) // true

const nextObjectGood = {
    ...object, // 기존에 있던 내용을 모두 복사해서 넣는다. 
    value: object.value + 1 // 새로운 값을 덮어 씌운다. 
};
console.log(object === nextObjectGood) // false

// 깊은 복사에 대해
const todos = [
    { id: 1, checked: true },
    { id: 2, checked: false },
];

const nextTodos = [...todos]; // 얕은 복사 
nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]); // 아직ㅈ까지는 똑같은 객체를 가리키고 있기 때문에 true

nextTodos[0] = {
    ...nextTodos[0],
    checked: false
};

console.log(todos[0] === nextTodos[0]); // 새로운 객체를 할당해주었기 때문에 false


// // 만약 객체 안에 있는 객체라면 불변성을 지키면서 새 값을 할당해야 하므로, 이렇게 해주자. 
// const nextComplexObject = {
//     ...complexObject,
//     objectInside: {
//         ...complexObject.objectInside,
//         enabled: false,
//     }
// };

// console.log(complextObject === nextComplexObject); // false
// console.log(complexObject.objectInside === nextComplexObject.objectInside); // false
// // 이렇게 구조가 복잡해진다면 불변성을 유지하면서 복사하는 것은 어려움.
// // immer라는 라이브러리의 도움을 받으면 편하게 작업가능.

