import articlesData from '../../data/articles-data.json';

// const baseUrl = 'https://newsapi.org/v2/'
// const apiKey = 'ef08ef1306454b8484cb57906a499a47'

const getArticles = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(articlesData);
    }, 300);
  });
  // return fetch(`${baseUrl}top-headlines?country=us&apiKey=${apiKey}`)
  //   .then(response => response.json())
  //   .catch(error => console.log(error));
}

export { getArticles };