const fetch = require('node-fetch');

fetch('https://google.com')
  .then(response => response.text())
  .then(data => console.log(data))