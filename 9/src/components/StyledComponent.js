import styled, { css } from "styled-components";
//@media가 중복사용되는 것을 막기위해 (귀찮아지고 코드도 길어짐) 함수화 하기
const size = {
    desktop: 1024,
    tablet: 768,
};

// 위에있는 size객체에 따라 자동으로 media쿼리 함수를 만들어 줄것이다. (여기 다시분석하기)
const media = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${size[label] / 16}em) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});

const Box = styled.div`
    /* props로 넣어준 값을 직접 전달할 수 있다. */
    background: ${(props) => props.color || "blue"};
    padding: 1rem;
    display: flex;

    /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고 가로 크기가
    작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채우기 */
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px`}
    ${media.tablet`width: 100%`};
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* & 문자를 사용하여 sass처럼 자기 자신 선택 가능 */
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* 다음 코드는 inverted 값이 true일때 특정 스타일링을 부여해준다. */
    ${(props) =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;

            &:hover {
                background: white;
                color: black;
            }
        `};
`;

const StyleComponent = () => {
    return (
        <Box color="skyblue">
            <Button>안녕하세요</Button>
            <Button inverted={true}>테투리만</Button>
        </Box>
    );
};

export default StyleComponent;
