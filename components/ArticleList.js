import React from 'react';
import { connect } from 'react-redux';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h2>Article List</h2>
      <ul>
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(ArticleList);
