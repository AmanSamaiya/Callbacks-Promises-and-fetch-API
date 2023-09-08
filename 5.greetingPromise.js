function greetings (name){
    
     return new Promise(function exec(resolve,reject){
      resolve(`Hello ${name}`)
    })
}

let greet = greetings("aman")


greet.then(function display(value){
  console.log(value);
})