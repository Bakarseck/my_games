class YoteGame {
    constructor() {
        this.pionToMove = null;
        this.isOrange = true;
        this.remainingOrange = 12;
        this.remainingGreen = 12;
        this.startTime = null;
    }

    changeBody() {
        document.body.innerHTML = this.bodyContent;
        const gridContainer = document.querySelector('.grid-container');
        this.startTime = new Date();
        this.updateTimer();
        this.createGrid(gridContainer);

        const allChilds = gridContainer.children;
        Object.entries(allChilds).map(([_, value]) => {
            value.addEventListener('click', (event) => {
                let positions = value.classList[1].split('-')[1];

                if (value.childNodes.length == 0) {
                    if (this.pionToMove == null) {
                        this.drawPions(positions);
                    } else {

                        let positionToMove = this.pionToMove.classList[1].split('-')[1];
                        const validOffsets = [-1, 1, -5, 5];

                        if (validOffsets.some(offset => positions - positionToMove === offset)) {
                            this.movePion(this.pionToMove, value);
                        }

                    }
                } else if (this.pionToMove == null) {
                    this.pionToMove = value;
                    value.style.background = "#389EF2";
                } else {
                    if (value == this.pionToMove) {
                        this.pionToMove = null;
                        value.style.background = "";
                    }
                }
            });
        });
    }

    movePion(toMove, destination) {
        let pion = toMove.querySelector("img");
        destination.append(pion);
        this.pionToMove.style.background = "";
        this.pionToMove = null;
    }

    createDiv(i) {
        const div = document.createElement('div');
        div.classList.add('case');
        div.classList.add('case-' + i);
        return div;
    }

    createGrid(gridContainer) {
        for (let i = 0; i < 25; i++) {
            const div = this.createDiv(i);
            gridContainer.appendChild(div);
        }
    }

    updateTimer() {
        const now = new Date();
        const elapsedMilliseconds = now - this.startTime;

        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;

        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        document.querySelector('.timer').textContent = formattedTime;

        requestAnimationFrame(() => this.updateTimer(), 1000);
    }

    drawPions(currentPosition) {
        const img = document.createElement('img');
        const parent = document.querySelector('.case-' + currentPosition);
        img.style.width = '80%';
        img.style.height = '80%';
        img.style.borderRadius = '50%';
        let image = this.isOrange ? "orange.png" : "green.png";
        if (image == "orange.png" && this.remainingOrange <= 0) {
            return;
        }
        if (image == "green.png" && this.remainingGreen < 0) {
            return;
        }
        image == "orange.png" ? this.remainingOrange -= 1 : this.remainingGreen -= 1;
        img.setAttribute("src", image);
        localStorage.setItem("current", image.slice(0, -4))

        this.isOrange = !this.isOrange;
        parent.append(img);
    }

    start() {
        const startButton = document.querySelector('.start');
        startButton.addEventListener('click', () => this.changeBody());
    }

    bodyContent = `
        <div class="container">
            <div class="player1 player">P1</div> 
            <div class="grid-container"></div>
            <div class="timer">00:00</div>
            <div class="player2 player">P2</div>
            <div class="current-player">Current Player: P1</div>
        </div>
    `;
}

const yoteGame = new YoteGame();
yoteGame.start();
