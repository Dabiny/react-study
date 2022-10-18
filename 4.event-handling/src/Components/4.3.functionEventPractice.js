import { useState } from "react";

const FunctionEventPractice = () => {
  //useState를 쓸 때 대문자로 시작해야 한다. 해멘 포인트
  //   const [username, setUsername] = useState("");
  //   const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);
  const onChange = (e) => {
    const nextForm = {
      ...form, // 스프레드 문법
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username" //state이름과 똑같은 이름으로 일치시키기
        placeholder="사용자명"
        value={username}
        onChange={onChange} // 같은 함수 쓰는 중..
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보셔요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default FunctionEventPractice;
