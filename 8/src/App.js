import { useState } from "react";
import Counter from "./components/8.1.Counter";
import Info from "./components/8.1.1.Info";
import Counter2 from "./components/8.3.Counter2";
import Info2 from "./components/8.3.2.Info2";
import Average from "./components/8.4.Average";

function App() {
  // return <Counter />
  // return <Info />
  
  // useEffect
  // const [visible, setVisible] = useState(false);

  // return (
  //   <div>
  //     <button onClick={() => {
  //       setVisible(!visible);
  //     }}>
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );

  // useReducer
  return <Counter2 />

  // return <Info2 />
  //return <Average />
}

export default App;
