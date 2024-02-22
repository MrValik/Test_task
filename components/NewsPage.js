import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleItem from './ArticleItem';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY'
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching articles: ', error);
    }
  };

  return (
    <div>
      <h2>News</h2>
      <ul>
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </ul>
      <button onClick={fetchArticles}>Load More</button>
    </div>
  );
};

export default NewsPage;
