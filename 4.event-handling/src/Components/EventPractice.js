import { Component } from "react";

// 4.2.1
class EventPractice extends Component {
    state = {
        message: ''
    }
    // // 꼭 생성자에 함수바인딩초기화를 해주어야한다. (4.2.3.1)
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }
    
    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     });
    // }

    // 4.2.3.2 화살표함수를 사용한 this 안끊기게 하기 화살표함수 메서드는 클래스를 가리킨다. 
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div> 
                <h1>이벤트 연습</h1>
                {/*<input // 4.2.2 e 이벤트 객체 알아보기
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요."
                    //4.2.2.2
                    value={this.state.message}
                    onChange={
                        (e) => {
                            // console.log(e.target.value);
                            this.setState({
                                message: e.target.value
                            });
                        }
                    }
                />
                // 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정
                <button onClick={() => {
                    alert(this.state.message);
                    this.setState({
                        message: ''
                    });
                }}>
                    확인
                </button>*/}

                <input // 4.2.3.1
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보셔요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>

            </div>
        )
    }
}

export default EventPractice;