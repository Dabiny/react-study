import logo from "./logo.svg";
import "./App.css";
import { Component, Suspense, useState } from "react";
import React from "react";
import loadable from '@loadable/component';
// import notify from './notify';

// function App() {
//   const onClick = () => {
//     import('./notify').then(result => result.default()); // 파일을 따로 분리시켜 저장.
//     // notify();
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React!</p>
//       </header>
//     </div>
//   );
// }

// export default App;

// class App extends Component {
//   state = { // 매번 state를 사용하여 컴포넌트 스플리팅을 하는것은 조금 귀찮고 불편하다.
//     SplitMe: null
//   };

//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });
//   };

//   render() {
//     const {SplitMe} = this.state;
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <p onClick={this.handleClick}>Hello React!</p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     )
//   }
// }
// export default App;

// ⭐️React.lazy & suspense 사용해서 코드스플리팅하기
// const SplitMe = React.lazy(() => import("./SplitMe"));
// function App() {
//     const [visible, setVisible] = useState(false);
//     const onClick = () => {
//         setVisible(true);
//     };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p onClick={onClick}>Hello React!!</p>
//                 <Suspense fallback={<div>Loading...</div>}>
//                     {visible && <SplitMe />}
//                 </Suspense>
//             </header>
//         </div>
//     );
// }
// export default App;

// ⭐️loadable 라이브러리 사용하기 
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>Loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload(); // 컴포넌트를 미리 불러오는 방법. 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React</p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}
export default App;
