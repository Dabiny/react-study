import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    // useNavegate사용하기 
    const navigate = useNavigate();

    const goBack = () => {
        //이전 페이지로 이동
        navigate(-1);
    };

    const goArticles = () => {
        // 특정 경로로 이동
        // navigate('/articles');
        navigate('/articles', {replace: true}); 
        // replace: true => 페이지 이동시 현재페이지를 페이지기록에 남기지 않음.
        // 홈 -> 소개 -> 게시글목록 -> 뒤로가기버튼 누르면 소개로가지않고 홈으로감. 
    };

    return (
        <div>
            <header style={{
                background: 'lightgray',
                padding: 16,
                fontSize: 24
            }}>
                Header
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록으로</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout;