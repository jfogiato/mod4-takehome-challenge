import React from 'react';

const ArticlePage = ({ article }) => {
  console.log(article)

  return (
    <div>
      <h1>Article {article.id}</h1>
    </div>
  );
}

export default ArticlePage;