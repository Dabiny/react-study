import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// // 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수.
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


// ⭐️bindActionCreators 사용
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      // 객체형태로 넣어주면 connect함수가 알아서 bindActionCreator 작업을 대신해준다.
      {
        increase,
        decrease,
      },
      dispatch,
    ),
)(CounterContainer);
