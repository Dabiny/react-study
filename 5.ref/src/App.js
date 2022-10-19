import { Component } from "react";
import ValidationSample from "./components/5.1.1.ValidationSample";
import ScrollBox from "./components/5.3.2.ScrollBox";

class App extends Component {
  // render() {
  //   return (
  //     <ValidationSample />
  //   );
  // }

  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollbox = ref}/>
        <button onClick={() => this.scrollbox.scollBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
