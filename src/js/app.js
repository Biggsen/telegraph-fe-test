const Utils = require('./utils');

new Utils();

fetch('https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments')
    .then(res => res.json())
    .then(data => {
      loadComments(data)
    })
    .catch(err => {
        console.log(`Error with message: ${err}`)
    });

function loadComments(data) {
  const container = document.getElementById("comments")
  const listEl = document.createElement("ul")
  container.appendChild(listEl)
  for (var i = 0; i < data.length; i++) {
    const listItemEl = document.createElement("li")
    listItemEl.insertAdjacentHTML(
      'afterbegin',
      `<h3>${data[i].name}</h3>
      <span>${data[i].likes}</span>
      <p>${data[i].body}</p>`
    )
    listEl.appendChild(listItemEl)
  }
}
