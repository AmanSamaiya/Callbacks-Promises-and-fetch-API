async function multireq (){
    const combineddata = {} ;
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then( function data(response){
        return response.json();
    })
    .then(function data(data){
        combineddata.todoTask = data ;
    })
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then( function data(response){
        return response.json();
    })
    .then(function data(data){
        combineddata.postDetails = data ;
    })

    console.log(combineddata);
}


multireq();