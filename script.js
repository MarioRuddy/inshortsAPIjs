const url = 'https://inshortsapi.vercel.app/news?category=national';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const articles = data.data;  // The array of articles is under 'data'
    const newsList = document.querySelector('#newsList');

    articles.forEach(article => {
      const item = document.createElement('li');
      const image = article.imageUrl ? `<img src="${article.imageUrl}" alt="${article.title}" />` : '';  // Corrected imageUrl field
      item.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <ul>
          <li><strong>Author:</strong> ${article.author}</li>
          <li><strong>Date:</strong> ${article.date}</li>
          <li><strong>Time:</strong> ${article.time}</li>
          <li><strong>URL:</strong> <a href="${article.readMoreUrl}" target="_blank">${article.readMoreUrl}</a></li>  <!-- Corrected the URL field -->
        </ul>
        ${image}
      `;
      newsList.appendChild(item);
    });
  })
  .catch(error => console.error(error));
