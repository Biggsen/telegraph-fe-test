const Utils = require('./utils');
const comments = require('./Comments')

new Utils();

fetch('https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments')
    .then(res => res.json())
    .then(data => {
      comments.List(data)
      comments.Count(data.length)
    })
    .catch(err => {
        console.log(`Error with message: ${err}`)
    });
