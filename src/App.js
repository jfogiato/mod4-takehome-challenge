import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ArticlePage from './components/ArticlePage/ArticlePage';
import Error from './components/Error/Error';
import { Route, Redirect } from 'react-router-dom';
import { getArticles } from './components/utilities/apiCalls';

function App() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [error, setError] = useState({});

  useEffect(() => {
    getArticles()
      .then(data => {
        const updatedArticles = data.articles.map((article, i) => {
          return {
            ...article,
            id: i
          }
        });
        setArticles(updatedArticles);
        setFilteredArticles(updatedArticles);
      })
      .catch(error => {
        setError(error)
        console.log(error)
      });
  }, []);

  const searchArticles = searchTerm => {
    if (!searchTerm) {
      setFilteredArticles(articles);
    } else {
      const filteredArticles = articles.filter(article => {
        return article.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredArticles(filteredArticles);
    }
  }

  const resetError = () => setError({});

  return (
    <>
      <NavBar searchArticles={searchArticles}/>
      <Route path='/articles/:id' render={({ match }) => {
        const article = articles.find(art => art.id === parseInt(match.params.id));
        return <ArticlePage article={article} />
      }} />
      <Route exact path="/" render={() => <Home articles={filteredArticles}/>}/>
      <Route path="/404"><Error error={error} resetError={resetError} /></Route> 
      <Route path='*'><Redirect to='/404'/></Route>
    </>
  );
}

export default App;
