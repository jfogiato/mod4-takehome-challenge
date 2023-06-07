import React from 'react';
import { Link } from 'react-router-dom';

const ArticleTile = ({ articleData }) => {
  const { title, description, urlToImage, publishedAt, id } = articleData;
  const date = new Date(publishedAt).toString().split(' ').slice(0, 4).join(' ');

  return (
    <div className="card m-3" style={{width: "35vmin", height: "auto", maxHeight: "60vmin"}}>
      <Link to={`articles/${id}`}><img className="card-img-top" src={urlToImage} alt={title}/></Link>
      <div className="card-body d-inline-block d-flex flex-column justify-center align-center">
        <Link to={`articles/${id}`}><h6 className="card-title text-truncate">{title}</h6></Link>
        <p className="card-text h-40 text-truncate">{description}</p>
        <p className="card-text">{date}</p>
      </div>
    </div>
  );
}

export default ArticleTile;