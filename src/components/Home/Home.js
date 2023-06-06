import React from 'react';
import ArticleTile from '../ArticleTile/ArticleTile';
import articlesData from '../../data/articles-data.json';

const Home = () => {

  const tiles = articlesData.articles.map((article, i) => {
    return (
      <ArticleTile key={article.id + "-" + i} articleData={article} />
    );
  });

  return (
    <>
      <h1 className='text-center'> Articles </h1>
      <div className='container-fluid d-flex .flex-row flex-wrap justify-content-center'>
        {tiles}
      </div>
    </>
  );
}

export default Home