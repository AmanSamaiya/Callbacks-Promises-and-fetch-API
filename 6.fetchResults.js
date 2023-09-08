async function fetchdata(){
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then( function after(response){
        return response.json();
    })
    .then(function after (data){
        console.log(data);
    })
}


fetchdata();