var input = document.cookie
    .split('; ')
    .find(row => row.startsWith('searchText='))
    .split('=')[1];


window.addEventListener('DOMContentLoaded', function () {
    var disqus_config = function () {
        this.page.url = 'https://ayesha1-404.glitch.me/search?searchText=' + input;
        this.page.identifier = '/search?searchText=' + input;
    };

    (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://ayesha-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
});


