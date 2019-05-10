// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments); // doesn't work with arrow functions, use a regular es5 function 
    return a + b; 
};

console.log(add(55,1,1001));

// this keyword - no longer bound with arrow functions 

const user = {
    name: 'Willis',
    cities: ['Calgary', 'Edmonton', 'Vancouver'],

    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');

        
        // console.log(this.name); 
        // console.log(this.cities); 
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });  
    }
};

console.log(user.printPlacesLived()); 

// Challenge area

const multiplier = {
    numbers: [10, 20, 30],
    mulitplyBy: 3,

    multiply() {
        return this.numbers.map((number) => number * this.mulitplyBy); 
    }
};

console.log(multiplier.multiply());