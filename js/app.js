const request = superagent;
var API_REQUEST = 'https://randomuser.me/api/?results=50';
var divParent = document.querySelector('.users-list');
request
  .get(API_REQUEST)
  .then(function (nElements) {
    var elements = nElements.body.results;
    elements.forEach(function (element) {
      var article = document.createElement('article');
      var span = document.createElement('span');
      var h6 = document.createElement('h6');
      span.innerHTML = element.nat;
      h6.innerHTML = element.email;
      article.appendChild(span);
      article.appendChild(h6);
      divParent.appendChild(article);
    });
  })