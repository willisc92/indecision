class OldSyntax {
    constructor() {
        this.name = "mike";
    }

    getGreeting() {
        return `Hi.  My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

console.log(oldSyntax); 

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi.  My name is ${this.name}`;
    };
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());; 