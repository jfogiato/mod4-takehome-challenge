const baseUrl = 'https://newsapi.org/v2/'
const apiKey = 'ef08ef1306454b8484cb57906a499a47'

const getArticles = () => {
  return fetch(`${baseUrl}top-headlines?country=us&apiKey=${apiKey}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export { getArticles };