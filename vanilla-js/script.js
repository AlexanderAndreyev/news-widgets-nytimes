(function() {

  const root = document.getElementById('news');

  function renderPost(news) {
    let h1 = document.createElement('h1'),
        abstract = document.createElement('p'),
        published_date = document.createElement('p'),
        newsUrl = document.createElement('a'),
        newsContainer = document.createElement('div');

    h1.innerHTML = news.title;
    abstract.innerHTML = news.abstract;
    published_date.innerHTML = news.published_date;
    newsUrl.innerHTML = 'Go to';
    newsUrl.setAttribute('href', news.url);
    newsUrl.setAttribute('target', '_blank');

    newsContainer.appendChild(h1);
    newsContainer.appendChild(abstract);
    newsContainer.appendChild(published_date);
    newsContainer.appendChild(newsUrl);
    root.appendChild(newsContainer);
  }

  function main() {

    const apiKey = 'd25d034213e347749d132cc22e08adcc';
    const url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/30.json" + "?api-key=" + apiKey;

    fetch(url).
    then(response => response.json()).
    then(data => {
      const posts = data.results;
      for (let i = 0; i < posts.length; i++) {
        renderPost(posts[i]);
      }
    });
  }

  main();

})();
