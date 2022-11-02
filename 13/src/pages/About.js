import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
    const location = useLocation();

    // useSearchParams: 쿼리스트링을 알아서 파싱해주고 쉽게 다룰 수 있게 해줌.
    // 배열 첫번째 원소 -> 쿼리 파라미터를 조회, set 메서드를 통해 특정 쿼리파라미터를 업데이트 가능
    // 만약 조회시 쿼리파라미터가 존재하지 않는다면 null로 조회됨.
    // 배열 두번째 원소 -> 쿼리파라미터를 객체 형태로 업데이트 할 수 있는 함수를 반환.
    const [serchParams, setSearchParams] = useSearchParams(); // 배열타입 반환
    const detail = serchParams.get('detail');
    const mode = serchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({
            mode,
            detail: detail === 'true' ? false : true 
        });
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({
            mode: nextMode,
            detail
        });
    }

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로젝트입니다.</p>
            <p>쿼리 스트링: {location.search}</p>
            <p>detail: {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>ToggleDetail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;