let person = {
    firstname : "aman",
    lastname : "samaiya",
    age : 25
}


function logResult (fullName,ageInDays) {
    console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays );
}


function ageInDays(obj,logResult){
  const fullName = obj.firstname + " " + obj.lastname ;
  const ageInDays = obj.age * 365 ;
  return logResult(fullName,ageInDays);
}

ageInDays(person,logResult);