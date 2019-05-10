console.log('App.js is running!');  // Prints to console.

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();  // prevents default behaviour of rerendering entire page. 

    const option = e.target.elements.option.value; // elements in form referenced by name 

    if (option) {
        app.options.push(option); 
        e.target.elements.option.value = ''; 
        render(); 
    }
};  // arrow function called with event object

const removeAll = () => {
    app.options = [];
    render(); 
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]; 
    alert(option); // creates popup alert when called.  
};

const appRoot = document.getElementById('app');   // Gets Element div

const render = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <button disabled={app.options.length == 0} onClick ={onMakeDecision}>What Should I do?</button>
            <button onClick = {removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)  
                } 
            </ol> 
            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div> 
    );
    ReactDOM.render(template, appRoot); 
};

render(); 


