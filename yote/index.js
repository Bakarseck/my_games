const startbutton = document.querySelector(".start")
startbutton.addEventListener("click", changeBody)

let test = false

let bodyContent = `
<div class="container">
    <div class="player1 player">P1</div> 
    <div class="grid-container"></div>
    <div class="timer">00:00</div>
    <div class="player2 player">P2</div>
    <div class="current-player">Current Player: P1</div>
</div>`

let startTime;
let isOrange = true;
let remainingOrange = 12
let remainingGreen = 12

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
    const allChilds = gridContainer.children
    Object.entries(allChilds).map(([_, value]) => {
        value.addEventListener('click', (event) => {
            let positions = value.classList[1].split('-')[1]
            if (value.childNodes.length == 0) {
                drawPions(positions)
            }
        })
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

/**
 * The function `drawPions` creates and appends an image element to a specified parent element, and
 * handles the logic for moving the image to different target elements when clicked.
 * @param currentPosition - The currentPosition parameter represents the current position of the pion
 * (game piece) on the game board.
 */
function drawPions(currentPosition) {
    const img = document.createElement('img');
    const parent = document.querySelector('.case-' + currentPosition);
    img.style.width = '80%';
    img.style.height = '80%';
    img.style.borderRadius = '50%';
    let image = isOrange ? "orange.png" : "green.png";
    if (image == "orange.png" && remainingOrange <= 0) {
        return
    }
    if (image == "green.png" && remainingGreen < 0) {
        return
    }
    image == "orange.png" ? remainingOrange -= 1: remainingGreen-=1
    console.log(remainingOrange, remainingGreen)
    img.setAttribute("src", image);

    img.addEventListener('click', () => {
        // let directions = [-1, 1, -5, 5];
        console.log("eeee")
        // directions.forEach(offset => {
        //     const newPosition = currentPosition + offset;
        //     const targetElement = document.querySelector('.case-' + newPosition);
    
        //     if (targetElement && targetElement.childNodes.length == 0) {
        //         targetElement.addEventListener('click', () => {
        //             if (targetElement.childNodes.length === 0) {
        //                 parent.removeChild(img);
        //                 targetElement.appendChild(img);
        //             }
        //         });
        //     }
        // });
    })

    isOrange = !isOrange;
    parent.append(img);
}
