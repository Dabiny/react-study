import { Component } from "react";

// 4.2.1
class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value // e.target.name을 활용하여 함수 재사용
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      message: "",
      username: ""
    });
  };

  // 4.2.5 onKeyPress활용하기 
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
            type="text"
            name="username" //state이름과 똑같은 이름으로 일치시키기
            placeholder="사용자명"
            value={this.state.username}
            onChange={this.handleChange} // 같은 함수 쓰는 중..
        />
        <input 
          type="text"
          name="message"
          placeholder="아무거나 입력해 보셔요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
