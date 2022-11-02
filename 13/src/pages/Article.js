import { useParams } from "react-router-dom";

const Article = () => {
    const { id } = useParams();

    const onClick = () => {
        console.log(id);
    }
    return (
        <div>
            <h2 onClick={onClick}>게시글 {id}</h2>
        </div>
    );
}

export default Article;