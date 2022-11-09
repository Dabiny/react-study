import { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

//Consumer 사용예시
// const ColorBox = () => {
//     return (
//         <ColorConsumer>
//             {({state}) => (
//                 <>
//                     <div
//                         style={{
//                             width: '64px',
//                             height: '64px',
//                             background: state.color
//                         }}
//                     />
//                     <div
//                         style={{
//                             width: '32px',
//                             height: '32px',
//                             background: state.subcolor
//                         }}
//                     />
//                 </>
//             )}
//         </ColorConsumer>
//     );
// };

// useContext Hook사용 (Consumer대신)
const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: "64px",
                    height: "64px",
                    background: state.color,
                }}
            />
            <div
                style={{
                    width: "32px",
                    height: "32px",
                    background: state.subcolor,
                }}
            />
        </>
    );
};

export default ColorBox;
