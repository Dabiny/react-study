import { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import Newspage from './page/Newspage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Newspage />} />
      <Route path='/:category' element={<Newspage />} />
    </Routes>
  )
}

// const App = () => {
//   const [data, setData] = useState(null);

//   const onClick = async () => {
//     try {
//       const res = await axios.get('https://example.com/');
//       setData(res.data);
//     }
//     catch(e) {
//       console.log(e);
//     }
    
//   }

//   return (
//     <div>
//       <button onClick={onClick}>불러오기</button>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   )
// };

export default App;
