import React from 'react';

const ArticleTile = ({ articleData }) => {
  const { title, description, urlToImage, publishedAt } = articleData;
  const date = new Date(publishedAt).toString().split(' ').slice(0, 4).join(' ');

  return (
    <div className="card m-3" style={{width: "25vw", height: "40vh"}}>
      <img className="card-img-top" src={urlToImage} alt={title}/>
      <div className="card-body">
        <h6 className="card-title text-truncate">{title}</h6>
        <p className="card-text text-truncate">{description}</p>
        <p className="card-text text-truncate">{date}</p>
      </div>
    </div>
  );
}

export default ArticleTile;