fetch("https://jsonplaceholder.typicode.com/posts/123456789")
  .then(function data(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
  .then(function data(data) {
    console.log(data);
  })
  .catch(function err(error) {
    console.log("Error in fetching data from API", error);
  });
