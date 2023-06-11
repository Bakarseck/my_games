<h1 align="center">Golang Games Repository</h1>

Welcome to the Golang Games Repository!!!
This Repository contains a collection of games written in the Go programming langauge, created by [Bakarseck](https://github.com/Bakarseck). Whether you're a beginner learning Go or an experienced developper looking for fun projects, this repository has something for everyone.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Game](#game)
3. [Dockerization](#dockerization)
4. [Contributing](#contributing)
5. [License](#license)
6. [Author](#author)

## Getting Started <a name="getting-started"></a>

To get started with the games in this repository, make sure you have Go installed on your machine. You can download and install Go by following the instructions provided on the [official Go website](https://go.dev/).

Once you have Go installed, clone this repository to your local machine and navigate to the repository's directory using the following command:

```bash
git clone https://github.com/Bakarseck/my_games.git
cd my_games
```

Now you're ready to explore the games!!!

## Game <a name="game"></a>

<details>
    <summary>Game1 : Tic-Tac-Toe</summary>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>Description</strong> : A command-line implementation of the popular Tic-Tac-Toe game where two players take turns making <code>X</code> or <code>0</code> on a 3x3 grid.<br>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>Rules</strong> : 
* To play, you must give The position that you want to play you sign.
* You can't play in a position that already played by another player
* You Win if you have your sign aligned three times.

Good luck playing TicTacToe!

#### Usage
```go
cd tictactoe
go build -o tictactoe
./tictactoe
```

</details>

<details>
    <summary>Game2: Hangman</summary>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>Description</strong>: Hangman is a command-line implementation of the popular Hangman game, where a player tries to guess a word by suggesting letters one by one.

&nbsp;&nbsp;&nbsp;&nbsp;<strong>Rules</strong>:
- A word is randomly chosen and its definition provided.
- The player has to guess which letters the word contains by proposing them one by one.
- The player suggests one letter at a time, and if that letter is present in the word, it is revealed at its corresponding position.
- If the suggested letter is not present in the word, the player loses a point.
- The player has a limited number of attempts to guess the complete word before losing the game.
- The player wins if they manage to guess the word before exhausting all their attempts.

Good luck playing Hangman!

#### Usage
```go
cd hangman
go build -o hangman
./hangman
```

</details>    


## Dockerization <a name="dockerization"></a>

<!-- Content for the "Dockerization" section goes here -->

## Contributing <a name="contributing"></a>

<!-- Content for the "Contributing" section goes here -->

## License <a name="license"></a>

<!-- Content for the "License" section goes here -->

## Author <a name="author"></a>

* [Bakarseck](https://github.com/Bakarseck)
