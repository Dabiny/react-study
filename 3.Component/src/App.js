import logo from './logo.svg';
import './App.css';
import MyComponent from './components/3.2.MyComponent';
import Counter from './/components/3.4.Counter';
import Say from './components/3.4.2.Say';

function App() {
  // 3.3.1 props 렌더링
  // return <MyComponent name="react"/>;

  // 3.3.3 default props 렌더링
  // return <MyComponent />;
  
  // 3.3.4 children
  // return <MyComponent>리액트</MyComponent>;

  // 3.3.6 
  // return <MyComponent name={3}>리액트</MyComponent>;

  // 3.3.6.1
  // return <MyComponent name="react" favoriteNumber="1">리액트</MyComponent>;

  // 3.4
  // return <Counter />;

  // 3.4.2
  return <Say />;
}

export default App;
