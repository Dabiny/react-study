import { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottem: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const NewsList = ({ category }) => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const query = category === 'all' ? '' : `&category=${category}`;
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8a09b0aa1447488fb3dc09e2b2c5f17e`,
				);
				setArticles(response.data.articles);
			} catch (err) {
				console.error(err);
			}
			setLoading(false);
		};
		fetchData();
	}, [category]); // []안에 업데이트요소를 꼭써줘야 useEffect가 버튼을 누를때마다 동작한다. 

	if (loading) {
		return <NewsListBlock>대기 중...</NewsListBlock>;
	}
	if (!articles) {
		return null;
	}

	return (
		<NewsListBlock>
			{articles.map((article) => (
				<NewsItem article={article} key={article.url} />
			))}
		</NewsListBlock>
	);
};

export default NewsList;
