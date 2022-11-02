import { useParams } from "react-router-dom";
const data = {
    velopert: {
        name: '김민준',
        description: '리액트 러버'
    },
    gildong: { //gildong -> username
        name: '김다빈',
        description: '리액트 공부러'
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    const onLoad = () => {
        console.log(profile); // {name: '김다빈', description: '리액트 공부러'}
        console.log(params.username); // gildong, velopert
        console.log(params);
    }
    return (
        <div>
            <h1>사용자 프로필</h1>
            { profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p onClick={onLoad}>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;