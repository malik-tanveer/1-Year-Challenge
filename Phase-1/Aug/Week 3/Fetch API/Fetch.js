let fetch = new XMLHttpRequest();
fetch.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
fetch.onload = function() {
  console.log(fetch.responseText);
};
fetch.send();
