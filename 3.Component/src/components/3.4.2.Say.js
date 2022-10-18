import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); //디스트럭처링 할당중

  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  // 3.4.2.3
  const [color, setColor] = useState("black");

  // 3.5
  const object = {
    a: 1,
    b: 2,
    c: 3
  };
  const nextObject = { ...object, b: 3 }; // ...스프레드로 사본만들어서 b값만 덮어씌우기.

  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: true },
  ];
  let nextArray = array.concat({ id: 4 }); // concat으로 새 항목 추가 붙여넣기
  nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거 (item.id가 !== 2인것만 추출)
  nextArray.map(item => (item.id === 1 ? {...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정


  return (
    <div>
      <button onClick={onClickEnter}>입장하기</button>
      <button onClick={onClickLeave}>퇴장하기</button>
      <h1 style={{color}}>{message}</h1>

      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파란색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록색
      </button>
    </div>
  );
};

export default Say;
