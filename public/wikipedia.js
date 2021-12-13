var input = document.cookie
  .split('; ')
  .find(row => row.startsWith('searchText='))
  .split('=')[1];

handleSubmit(input);


function handleSubmit(input) {
  const searchQuery = input.trim();
  fetchResults(searchQuery);
}


// more on using wikipedia action=query https://www.mediawiki.org/wiki/API:Query
function fetchResults(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&titles=${searchQuery}`;
  fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      const results = response.query.pages;
      displayResults(results);
    })
    .catch(err => {
      console.log('caught it!', err);
    });
}

// display resuts on the page
function displayResults(results) {

  for (const [key, value] of Object.entries(results)) {
    const result = value;
    const searchResults = document.querySelector('.searchResults');
    searchResults.innerHTML = '';
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);

    searchResults.insertAdjacentHTML('beforeend',
      `<div class="resultItem">
      <h3 class="resultItem-title">
        <a href="${url}" target="_blank" rel="noopener">Wikipedia Page of ${result.title}</a>
      </h3>
      <span class="resultItem-snippet">${result.extract}</span><br>
    </div>`
    );
    break;
  }
}


