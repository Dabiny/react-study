import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const Articles = () => {
    // const activeStyle = {
    //     color: "green",
    //     fontSize: 21,
    // };
    // navLink 사용하기
    // return (
    //     <ul>
    //         <Outlet />
    //         <li>
    //             {/* <Link to="/articles/1">게시글 1</Link> */}
    //             <NavLink
    //                 to="/articles/1"
    //                 style={({ isActive }) =>
    //                     isActive ? activeStyle : undefined
    //                 }
    //             >
    //                 게시글 1
    //             </NavLink>
    //         </li>
    //         <li>
    //             {/* <Link to="/articles/2">게시글 2</Link> */}
    //             <NavLink
    //                 to="/articles/2"
    //                 style={({ isActive }) =>
    //                     isActive ? activeStyle : undefined
    //                 }
    //             >
    //                 게시글 2
    //             </NavLink>
    //         </li>
    //         <li>
    //             {/* <Link to="/articles/3">게시글 3</Link> */}
    //             <NavLink
    //                 to="/articles/3"
    //                 style={({ isActive }) =>
    //                     isActive ? activeStyle : undefined
    //                 }
    //             >
    //                 게시글 3
    //             </NavLink>
    //         </li>
    //     </ul>
    // );

    // ** 리팩토링 예시 1 **
    return (
        <div>
            <Outlet />
            <ul>
                <ArticleItem id={1}/>
                <ArticleItem id={2}/>
                <ArticleItem id={3}/>
            </ul>
        </div>
    );
};

// ** 리팩토링 예시 1 **
const ArticleItem = ({ id }) => {
    const activeStyle = {
        color: "pink",
        fontSize: 25,
    };
    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({isActive}) => (isActive ? activeStyle : undefined)}
            >게시글 {id}</NavLink>
        </li>
    )
};
export default Articles;
