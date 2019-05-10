const user = {    // User object in JavaScript.
    name: 'Willis',
    age: 27,
    location: 'Calgary'
};

// var userName = 'Mike';   // Strings/Numbers in JavaScript.  
// var userAge = 27; 
// var userLocation = 'Calgary'

function getLocation(location) {    //function definition with one argument
    if (location) {
        return <p>Location: {location}</p>; 
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);  

// undefined, true, and false are not rendered by JSX.
// user.name uses include ternary operator with '?' and ':'
// getLocation uses a function call (elements must be a valid javascript expression)
// if/else statements are not valid javascript expressions - must be enclosed in a function
// or a ternary operator.  
// Logical && operator returns the second value when the first value is true.  

const appRoot = document.getElementById('app');   // Gets Element div
ReactDOM.render(templatetwo, appRoot); 