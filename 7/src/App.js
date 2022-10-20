import { Component } from "react";
import LifeCycleSample from "./components/7.3.1.LiftCycleSample";
import ErrorBoundary from "./components/ErrorBoundary";

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  };

  handleClick = () => {
    this.setState({
      color: randomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
        <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  
  }
}

export default App;
