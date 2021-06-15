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
    listItemEl.className = 'comments-item';
    listItemEl.insertAdjacentHTML(
      'afterbegin',
      `<div class="comments-header flex">
        <h3 class="comments-heading">${data[i].name}</h3>
        <span class="comments-likes">${data[i].likes} Likes</span>
      </div>
      <div class="comments-body">
        <p>${data[i].body}</p>
      </div>`
    )
    listEl.appendChild(listItemEl)
  }
}
