import { useState, useEffect } from "react";
// 여러개의 useStae와, useEffect활용 예시
const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    // useEffect (() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // }, []);
    // // 두번째 인자에 []를 넣으면 처음 렌더링될때만 실행된다. , 특정값만 검사하고 싶을땐 []에
    // // 특정 state이름을 적어주면 된다.
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    // 언마운트시 뒷정리 함수를 적어넣어주자.
    useEffect(() => {
        console.log('Effect');
        console.log(name);

        return () => {
            console.log('cleanUp');
            console.log(name);
        }
    }, []);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>

            <div>
                <b>이름: </b> {name}
            </div>
            <div>
                <b>닉네임: </b> {nickname}
            </div>
        </div>
    );
};

export default Info;
