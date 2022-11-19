import { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// ⭐️ useSelector로 connect대신 쓰기 , useDispatch로 액션디스패치 하기
// const 결과 = useSelector(상태 선택 함수); 상태선택함수는 mapStateToProps와 같다.
// const dispatch = useDispatch(); dispatch({ type: 'SAMPLE_ACTION'}); 이런식
// 만약 컴포넌트 성능을 최적화해야 하는 상황이 온다면 useCallBack으로 액션을 디스패치하는 함수를 감싸자. (습관들이기)
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};
export default CounterContainer;

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수.
// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// // 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수.
// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//        dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);

// // ⭐️ bindActionCreators 사용
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       // 객체형태로 넣어주면 connect함수가 알아서 bindActionCreator 작업을 대신해준다.
//       {
//         increase,
//         decrease,
//       },
//       dispatch,
//     ),
// )(CounterContainer);
