const MAX = 800; //will keep things from going way off the screen
let container = document.getElementById('square-container');
class Square { //Javascript class
    constructor(x, y, size) {
        this.div = document.createElement('div');
        this.div.classList.add('square'); //CSS class
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`; //setting the coordinates with template literals
        this.div.style.width = `${size}px`;
        this.div.style.height = `${size}px`;
        this.div.addEventListener('click', () => {
            this.updateColor();
            this.updateLocation();
        });//Can use an arrow function, or bind(this) without the arrow function
        //bind(this) would have to be used because when you create the new func, it is applying to the div element, not the actual square
        this.updateColor();
        container.appendChild(this.div);
    }

    updateLocation() {
        let xVal = randomVal(0, MAX);
        let yVal = randomVal(0, MAX);
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }

    updateColor() {
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
        this.div.style.backgroundColor = randomColor;
    }
}

let sqButton = document.getElementById('sq-button');
sqButton.addEventListener('click', insertSquare);

function insertSquare() {
    let xVal = randomVal(0, MAX);
    let yVal = randomVal(0, MAX);
    let size = randomVal(25, 100);
    let sq = new Square(xVal, yVal, size);
}


function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Inheritance Pracice:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        alert(`Greetings! I am ${this.name}.`);
    }
    sleep() {
        alert(`I am going to sleep now. My name is ${this.name}.`);
    }
}

//new Class extends 'name of parent class'
class Teacher extends Person {
    constructor(name, age, dept) {
        //use super to call the parent constructor. 
        //keyword super will connect to whatever is to the right of 'extends'. In this example, Person.
        super(name, age);

        //then set your own properties that are unique to the child class. In this example, Teacher.
        this.dept = dept;
    }
    //This will overwrite the function inherited from the parent class:
    greet() {
        alert(`Greetings! I am ${this.name}. I work in the ${this.dept} department.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    greet() {
        alert(`Greetings! I am ${this.name}. I am majoring in ${this.major}.`);
    }
}

let p1 = new Person ('Darius Rucker', 55);
let t1 = new Teacher('Cindy Childers', 58, 'Art');
let s1 = new Student('Ellie Banks', 28, 'Web Development');

p1.greet();
t1.greet();
s1.greet();

p1.sleep();
t1.sleep();
s1.sleep();