const searchuniversity = async searchBox => {
    const res = await fetch('/json/universityList.json');

    const universities = await res.json();
    
    //Get & Filter Through Entered Data
    let fits = universities.filter(university => {
      const regex = new RegExp(`^${searchBox}`, 'gi');
      return university.name.match(regex);
    });
    
    //Clears Data If Search Input Field Is Empty
    if (searchBox.length === 0) {
      fits = [];
      universityList.innerHTML = '';
    }
    outputHtml(fits);
  };


const outputHtml = fits => {
    if (fits.length > 0) {
      const html = fits
        .map(
          fit => `
             <h4 class="card-title">${fit.name}</h4>`
        )
        .join('');
  
      document.getElementById('universityList').innerHTML = html;
    }
  };

  document
  .getElementById('search')
  .addEventListener('input', () => searchuniversity(search.value));

  document.getElementById('universityList').addEventListener('click', (event) => {
    document.getElementById('search').value = event.target.innerHTML;
  })
  