import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ArticlePage from './components/ArticlePage/ArticlePage';
import { Route } from 'react-router-dom';
import articlesData from './data/articles-data';

function App() {

  const updatedArticles = articlesData.articles.map((article, i) => {
    return {
      ...article,
      id: i
    }
  });

  const [articles, setArticles] = useState(updatedArticles);
  const [filteredArticles, setFilteredArticles] = useState(articles);

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

  return (
    <>
      <NavBar searchArticles={searchArticles}/>
      <Route path='/articles/:id' render={({ match }) => {
        const article = articles.find(art => art.id === parseInt(match.params.id));
        return <ArticlePage article={article} />
      }} />
      <Route exact path="/" render={() => <Home articles={filteredArticles}/>}/>
    </>
  );
}

export default App;
