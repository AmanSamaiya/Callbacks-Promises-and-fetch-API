fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function data(response) {
    return response.json();
  })
  .then(function data(data) {
    console.log(data);
  });
