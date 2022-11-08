import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';
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

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8a09b0aa1447488fb3dc09e2b2c5f17e`,
    );
  }, [category]);

  if (loading){
    return <NewListBlock>대기 중...</NewListBlock>
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewListBlock>에러발생</NewListBlock>
  }

  const { articles } = response.data;
  return (
    <NewListBlock>
      {articles.map((article) => (
            <NewsItem key={article.url} article={article} />
          ))}
    </NewListBlock>
  );
};

export default NewsList;
