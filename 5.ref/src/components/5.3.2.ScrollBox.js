import { Component } from "react";

class ScrollBox extends Component {
    // this.box에 연결된 돔 (<div>)의 요소를 직접가져와 설정하는 함수.
    scollBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    };

    render() {
        const style = {
            border: "1px solid black",
            height: "300px",
            width: "300px",
            overflow: "auto",
            position: "relative",
        };

        const innerStyle = {
            width: "100%",
            height: "650px",
            background: "linear-gradient(white, black)",
        };

        return (
            <div style={style} ref={(ref) => (this.box = ref)}>
                <div style={innerStyle} />
            </div>
        );
    }
}

export default ScrollBox;
