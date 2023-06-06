import React from 'react';
import { Link } from 'react-router-dom';

const ArticleTile = ({ articleData }) => {
  const { title, description, urlToImage, publishedAt, id } = articleData;
  const date = new Date(publishedAt).toString().split(' ').slice(0, 4).join(' ');

  return (
    <div className="card m-3" style={{width: "25vw", height: "40vh"}}>
      <img className="card-img-top" src={urlToImage} alt={title}/>
      <div className="card-body">
        <Link to={`articles/${id}`}><h6 className="card-title text-truncate">{title}</h6></Link>
        <p className="card-text text-truncate">{description}</p>
        <p className="card-text text-truncate">{date}</p>
      </div>
    </div>
  );
}

export default ArticleTile;