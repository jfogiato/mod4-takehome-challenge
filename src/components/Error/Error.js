import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ error, resetError}) => {
  const { code, message } = error;

  return (
    <div className='container-fluid h-100 w-100 d-flex flex-column align-items-center justify-content-center'>
      <h1 className='text-center h-50'> Oh no! Something went wrong. </h1>
      <h3 className='text-center h-50'>Try refreshing the page or going<Link to="/" onClick={resetError}> home.</Link></h3>
      {code && <p>{code}:{message}</p>}
    </div>
  );
}

export default Error;