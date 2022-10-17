import logo from './logo.svg';
import './App.css';
import MyComponent from './components/3.2.MyComponent';

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
  return <MyComponent name="react" favoriteNumber="1">리액트</MyComponent>;
}

export default App;
