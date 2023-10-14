const startbutton = document.querySelector(".start")
startbutton.addEventListener("click", changeBody)

let bodyContent = `<div class="container">
<div class="player1 player">P1</div> 
<div class="grid-container"></div>
<div class="timer">00:00</div>
<div class="player2 player">P2</div>
<div class="current-player">Current Player: P1</div>
</div>`

let startTime;

/**
 * The function `changeBody` changes the content of the body element, creates a grid, and adds a click
 * event listener to the grid container.
 */
function changeBody() {
    document.body.innerHTML = bodyContent
    const gridContainer = document.querySelector('.grid-container')
    startTime = new Date()
    updateTimer()
    createGrid(gridContainer)
    document.querySelector('.grid-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('case')) {
            const classes = event.target.className.split(' ');

            for (const cls of classes) {
                if (cls.startsWith('case-')) {
                    let currentPosition = parseInt(cls.split('-')[1]);
                    let parent = document.querySelector('.case-' + currentPosition);
                    if (parent.childNodes.length > 0) {
                        alert("Veuillez cliquez autre part")
                        break
                    }
                    drawPions(currentPosition)
                }
            }
        }
    })
}

/**
 * The function creates a new div element with specified class names.
 * @param i - The parameter "i" represents the index or number that will be used to create a unique
 * class name for the div element.
 * @returns a newly created `<div>` element with the class "case" and "case" followed by the value of
 * the parameter `i`.
 */
function createDiv(i) {
    const div = document.createElement('div')
    div.classList.add('case')
    div.classList.add('case-' + i)
    return div
}

/**
 * The function creates a grid by appending 24 div elements to a specified container.
 * @param gridContainer - The `gridContainer` parameter is the container element where the grid will be
 * created. It could be a div element or any other HTML element that can contain child elements.
 */
function createGrid(gridContainer) {
    for (let i = 0; i < 25; i++) {
        const div = createDiv(i)
        gridContainer.appendChild(div)
    }
}

/**
 * The function `updateTimer` calculates the elapsed time since `startTime` and updates the text
 * content of an element with the formatted time.
 */
function updateTimer() {
    const now = new Date();
    const elapsedMilliseconds = now - startTime;

    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.querySelector('.timer').textContent = formattedTime;

    requestAnimationFrame(updateTimer, 1000);
}

function drawPions(currentPosition) {
    const div = document.createElement('div')
    const parent = document.querySelector('.case-' + currentPosition);
    div.style.background = 'red';
    div.style.width = '80%'
    div.style.height = '80%'
    div.style.borderRadius = '50%'
    parent.append(div)
}

/* The Player class represents a player in a game and keeps track of their name, color, number of
pions, remaining pions, remaining current pions, and rewards. */
class Player {
    constructor(name, color) {
        this.name = name
        this.color = color
        this.nbPions = 12
        this.remainingPions = 12
        this.remaingCurrentPions = 12
        this.rewards = 0
    }
    move(direction) {

    }
    kill() {

    }
}

// function getCurrentPlayer() {

// }