import { useCallback, useState } from 'react';
import axios from '../node_modules/axios/index';
import Cartegories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCartegory] = useState('all');
  const onSelect = useCallback (
    category => {
      setCartegory(category)
    },
    []
  )

  return (
    <>
      <Cartegories category={category} onSelect={onSelect}/>
      <NewsList />
    </>
  )
};
export default App;




  // const [data, setData] = useState(null);

  // // const onClick = () => {
  // //   axios.get('https://jsonplaceholder.typicode.com/todos/1')
  // //   .then(response => setData(response.data));
  // // };

  // const onClick = async () => {
  //   // async함수 활용
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=8a09b0aa1447488fb3dc09e2b2c5f17e',
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && (
  //       <textarea
  //         rows={7}
  //         value={JSON.stringify(data, null, 2)}
  //         readOnly={true}
  //       />
  //     )}
  //   </div>
  // );