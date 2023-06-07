import React from 'react';

const ArticlePage = ({ article }) => {
  const { title, author, urlToImage, publishedAt, content, url } = article;
  const date = new Date(publishedAt).toString().split(' ').slice(0, 4).join(' ');
  const cleanedContent = content.split('[')[0];

  return (
    <div className='p-3'>
      <h1 className='text-center'>{title}</h1>
      <div className='container-sm'>
        <img src={urlToImage} alt={title} className='img-fluid mh-10' />
      </div>
      {(author !== 'Staff Writer' && author && !author.includes('https')) && <h2>Written by {author}</h2>}
      <h3 className='font-italic'>{date}</h3><br/>
      <p>{cleanedContent}</p>
      <a href={url} target='blank' >Read More {`->`}</a>
    </div>
  );
}

export default ArticlePage;