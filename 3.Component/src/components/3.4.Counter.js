import { Component } from "react";

// 3.4.1
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { //state의 초기값 설정하기 
            number: 0,
            //3.4.1.1
            fixedNumber: 0
        };
    }

    // 3.4.1.2 constructor없이 state 설정만 가능하다. 
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state; // ⭐️디스트럭처링을 통해 위의 state값을 가져와야한다. 
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber} </h2>
                <button
                    // onClick을 통해 버튼이 클릭 되었을 때 호출할 함수를 지정한다. 
                    // onClick={() => {
                    //     this.setState({
                    //         number: number + 1
                    //     });
                    //     // 3.4.1.3 
                    //     this.setState({
                    //         number: this.state.number + 1
                    //     });
                    // }}

                    //3.4.1.3 해결책
                    // onClick={() => { // onClick되었을때 호출할 함수를 지정한다. 
                    //     this.setState(prevState => {
                    //         return {
                    //             number: prevState.number + 1
                    //         };
                    //     });
                    //     // 위, 아래 코드는 완전히 똑같은 기능을 한다. 아래 코드는 함수에서 바로 객체를 반환한다는 의미다. 
                    //     this.setState(prevState => ({
                    //         number: prevState.number + 1
                    //     }));
                    // }}

                    // 3.4.1.4 값을 업데이트하고 난 다음에 특정 작없을 하고 싶을때 두번째 인자에 콜백함수 전달.
                    onClick={() => {
                        this.setState({
                            number: number + 1
                        }, () => {
                            console.log('setState가 호출된 뒤 콘솔');
                            console.log(this.state);
                        });
                    }}
                >
                    clickMe +1
                </button>
            </div>
        );
    }
}

export default Counter;