var nameVar = 'Andrew';
var nameVar = 'Mike';   // vars can be redefined and redeclared.
console.log('nameVar', nameVar); 

let nameLet = 'Jen'; 
nameLet = 'Julie'; // lets can be reassigned with es6.
// let nameLet = 'Julie'; // lets can not be redeclared
console.log('nameLet', nameLet);

const nameConst = 'Frank';  // consts cannot be redefined or reassigned.  
console.log('nameConst', nameConst); 

// ***Use const by default and use let if required to reassign.  Don't use var!***

function getPetName() {
    var petName = 'Mal'; 
    return petName; 
}

const petName = getPetName(); 
// console.log(petName); // petName local to getPetName scope.  True for var/let/const

// Block level scoping.

var fullName = 'Willis Cheung'; // var based variables are function level scoped.
// let and const are blocked scoped.  
let lastName; 

if (fullName) {
    var firstName = fullName.split(' ')[0]; 
    lastName = fullName.split(' ')[1]; 
    console.log(firstName); 
    console.log(lastName); 
}

console.log(firstName); // Throws an error if firstName is a let or const.
console.log(lastName); 