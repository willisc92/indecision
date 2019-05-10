// function square(x) {   // es5 function
//     return x * x; 
// };

// console.log(square(8));


// // const squareArrow = (x) => { // es6 arrow function - always anonymous.  
// //     return x * x; 
// // };

// const squareArrow = (x) => x * x; // return not explicity required.

// console.log(squareArrow(8));

// Challenge - Use arrow functions
// getFirstName - recreate extracting first name from es6-let-const.js 

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0]; 
// }

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName("Willis Cheung"));