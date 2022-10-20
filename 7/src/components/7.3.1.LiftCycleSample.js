import { Component } from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null; // ref을 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // prop로 받아온 값을 state에 동기화 시키는 용도, 컴포넌트가 마운트 될때마다 업데이트될때 호출한다. 
    static getDerivedStateFromProps(nextProps, prevState){
        console.log(
            "getDerivedStateFromProps: prop로 받아온 값을 state에 동기화 시키는 용도, 컴포넌트가 마운트 될때마다 업데이트될때 호출한다."
        );
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color }; //setState를 안쓰고..? 동기화시켜주는것이니까 ??
        }
        return null;
    }

    // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행할 때 호출
    componentDidMount() {
        console.log(
            "componentDidMount: 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행할 때 호출"
        );
    }

    // props 또는 state값을 변경했을 때 리렌더링을 시작할지 여부를 지정한다. 
    shouldComponentUpdate(nextProps, nextState) {
        console.log(
            "shouldComponentUpdate: props 또는 state값을 변경했을 때 리렌더링을 시작할지 여부를 지정한다.",
            nextProps,
            nextState
        );

        // 숫자의 마지막 자리가 4면 리렌더링 하지 않는다. 
        return nextState.number % 10 !== 4;
    }

    // 컴포넌트를 DOM에서 제거할때 실행한다. componentDidMount에서 등록한 이벤트, 타이머, 직접생성한 DOM이 있다면 여기서 제거
    componentWillUnmount() {
        console.log(
            "componentWillUnmount: 컴포넌트를 DOM에서 제거할때 실행한다. componentDidMount에서 등록한 이벤트, 타이머, 직접생성한 DOM이 있다면 여기서 제거"
        );
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출. 주로 업데이트하기 직전의 값을 참고할일이 있을 때 활용.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(
            "getSnapshotBeforeUpdate: render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출. 주로 업데이트하기 직전의 값을 참고할일이 있을 때 활용."
        );
        
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // 리랜더링 완료 후 실행된다. 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: ', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };

        return (
            <div>
                {/* {this.props.missing.value}
                {this.state.number} */}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;