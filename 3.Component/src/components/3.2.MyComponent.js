// 3.3.6
import PropTypes from "prop-types";

// 3.2
// const MyComponent = () => {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// 3.3.1 부모컴포넌트에서 보낼 내용 <MyComponent name=""/>을 지정해줘야한다.
// const MyComponent = (props) => {
//     return <div> 안녕하세요 제 이름은 {props.name} 입니다. </div>
// }

// 3.3.4 children
// const MyComponent = (props) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {props.name} 입니다. <br/>
//             children 값은 {props.children} 입니다.
//         </div>
//     );
// }

// 3.3.5 destructuring assignment (비구조화 할당)
// const MyComponent = (props) => {
//     const { name, children } = props; // 디스트럭처링

//     return (
//         <div>
//             안녕하세요, 제 이름은 {name} 입니다. <br/>
//             children값은 {children} 입니다.
//         </div>
//     )
// }

// const MyComponent = ({name, children}) => { // 위와 같은 내용 파라미터 안에서도 사용가능하다.
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다. <br />
//       children값은 {children} 입니다.
//     </div>
//   );
// };

// 3.3.6 위 임포트 default를 해주고 밑에 propTypes를 지정해준다. 
const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children값은 {children} 입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

// 3.3.3 디폴트로 props가 정해지지 않아도 기본값 정하기
MyComponent.defaultProps = {
  name: "기본 이름",
};

// 3.3.6 propTypes 지정해주기
MyComponent.propTypes = {
  name: PropTypes.string,
  // name값은 무조건 문자열 형태로 전달해야 된다는 것을 의미한다.
  // 만약 string이 아닌 다른 자료형을 prop.name에 받는다면 console창에 오류가 뜬다.
  // Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `MyComponent`, expected `string`.

  // 3.3.6.1 isRequired 붙이기
  favoriteNumber: PropTypes.number.isRequired,
  // propTypes를 지정하지 ㅇ낳았을 때 경고 메세지를 띄워주는 역할.
  // Warning: Failed prop type: Invalid prop `favoriteNumber` of type `string` supplied to `MyComponent`, expected `number`.
};
export default MyComponent;
