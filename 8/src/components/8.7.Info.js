import useInputs from "./8.7.useInput";

// custom Hook 함수 사용예시 
const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });

    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input value={name} onChange={onChange} />
                <input value={nickname} onChange={onChange} />
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
