const url = 'http://inshorts.com/api/en/search/trending_topics/science';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const articles = data.data;
    const newsList = document.querySelector('#newsList');

    articles.forEach(article => {
      const item = document.createElement('li');
      const image = article.image_url ? `<img src="${article.image_url}" alt="${article.title}" />` : '';
      item.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <ul>
          <li><strong>Author:</strong> ${article.author}</li>
          <li><strong>Date:</strong> ${article.date}</li>
          <li><strong>Time:</strong> ${article.time}</li>
          <li><strong>URL:</strong> <a href="${article.url}" target="_blank">${article.url}</a></li>
        </ul>
        ${image}
      `;
      newsList.appendChild(item);
    });
  })
  .catch(error => console.error(error));
