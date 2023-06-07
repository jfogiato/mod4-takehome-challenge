import React from 'react';

const ArticlePage = ({ article }) => {
  const { title, author, urlToImage, publishedAt, content } = article;
  const date = new Date(publishedAt).toString().split(' ').slice(0, 4).join(' ');

  return (
    <div>
      <div className='container-fluid'>
        <img src={urlToImage} alt={title} className='img-fluid' />
      </div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{date}</h3>
      <p>{content}</p>
    </div>
  );
}

export default ArticlePage;