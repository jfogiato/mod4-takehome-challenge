const baseUrl = 'https://newsapi.org/v2/'

const getArticles = () => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(articlesData);
  //   }, 300);
  // });
  return fetch(`${baseUrl}top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY_TOP_SECRET}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export { getArticles };