//reading selected university from cookies
var input = document.cookie
    .split('; ')
    .find(row => row.startsWith('searchText='))
    .split('=')[1];


//getting the twitter handle of selected university
const searchuniversity = async (input) => {
    input = input.replace(/%20/g, " ");
    const res = await fetch('/json/universityList.json');
    const universities = await res.json();
    for (const [key, value] of Object.entries(universities)) {
        if (value.name.toLowerCase() === input.toLowerCase()) {
            outputHtml(value.twitterHandle);
            break;
        }
    }
};

const outputHtml = (handle) => {
    console.log("handle : " + handle);
    const outputdiv = document.getElementById('twitter');
    outputdiv.insertAdjacentHTML('beforeend',
        `<a class="twitter-timeline" data-lang="en" data-height="500" data-theme="dark" href="https://twitter.com/${handle}?ref_src=twsrc%5Etfw">Tweets by ${handle}</a>
       `
    );
}

window.addEventListener('DOMContentLoaded',function () {
    searchuniversity(input);
  });




