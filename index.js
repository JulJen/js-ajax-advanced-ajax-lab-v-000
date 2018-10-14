// link is firing function when user clicks 'Get Repositories' anchor tag
function getRepositories() {
  // creating new instance and initializing XHR request
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

/*
function showRepositories(event, data) {
  // use JSON/parse to parse response string into proper objects
  const repos = JSON.parse(this.responseText);
  //building an unordered list using map to create <li></li> nodes for each object in repos
  const repoList = `<ul>${repos
    .map(r => '<li>' + r.name + '</li>')
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}
*/

//defining callback function  to handle response
function showRepositories(event, data) {
  // use JSON/parse to parse response string into proper objects
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById('repository-template').innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  document.getElementById('repositories').innerHTML = repoList;
}
