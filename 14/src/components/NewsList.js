import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';

const NewListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https"//goggle.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=8a09b0aa1447488fb3dc09e2b2c5f17e',
                );
                setArticles(response.data.articles);
            }
            catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

  return (
    <NewListBlock>
        { !articles ? console.log('article null 에러') : articles.map(article => (
            <NewsItem key={article.url} article={article} />
        ))}
    </NewListBlock>
  );
};

export default NewsList;
