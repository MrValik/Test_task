import React from 'react';

const ArticleItem = ({ article }) => {
  return (
    <li>
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>{article.description}</p>
    </li>
  );
};

export default ArticleItem;
