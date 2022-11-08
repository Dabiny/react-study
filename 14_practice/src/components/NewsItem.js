import styled from 'styled-components';

const NewsBlock = styled.div`
	display: flex;
	margin-bottom: 1rem;
	.thumnail {
		margin-right: 2rem;

		img {
            display: block;
			width: 160px;
			height: 100px;
			object-fit: cover;
		}
	}
	.contents {
		h2 {
			margin: 0;
		}
	}
`;

const NewsItem = ({ article }) => {
    const {title, description, url, urlToImage} = article;
    return (
			<NewsBlock>
				{urlToImage !== null ? (
					<div className="thumnail false">
						<a href={url} target="_blank" rel="noopener noreferrer">
							<img src={urlToImage} alt="thumnail" />
						</a>
					</div>
				) : (
					<div className="thumnail false">
						<img src='https://via.placeholder.com/160' alt="noImage" />
					</div>
				)}
				<div className="contents">
					<h2>
						<a href={url} target="_blank" rel="noopener onreferrer noreferrer">
							{title}
						</a>
					</h2>
					<p>{description}</p>
				</div>
			</NewsBlock>
		);
};
export default NewsItem;
