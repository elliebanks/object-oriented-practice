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