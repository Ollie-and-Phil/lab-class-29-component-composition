const fs = require('fs').promises;
const http = require('https');

Promise.all([
  get(`https://hey-arnold-api.herokuapp.com/api/v1/characters/random?count=${count}`),
  get(`https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=${count}`)
])
  .then(([{ results: characters }, { results: gifs }]) => {
    return {
      characters: characters.map(({ id, name, image }) => ({ id, name, image })),
      gifs: gifs.map(({ id, gifLink }) => ({ id, gifLink }))
    };
  })
  .then(obj => fs.writeFile('./content.json', JSON.stringify(obj)));

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });
}
