package main

import (
	"fmt"
	"os"
	"os/exec"
	"strings"
)

/*
	Define a Type Joueur to represent a player
	A player should have position, a name and a symbol
*/

type Joueur struct {
	position int
	name string
	symbol byte
}

func win(joueur Joueur) {

	for i, v := range board {
		if v == joueur.symbol {
			// In same line
			if i%3==0  {
				if board[i+1] == joueur.symbol && board[i+2] == joueur.symbol {
					clearConsole("")
					PrintBoard()
					fmt.Printf("%v a gagné\n", joueur.name)
					os.Exit(0)
				}
			}

			// In same  Column
			if i == 0 || i == 1 || i == 2 {
				if board[i+3] == joueur.symbol && board[i+6] == joueur.symbol {
					clearConsole("")
					PrintBoard()
					fmt.Printf("%v a gagné\n", joueur.name)
					os.Exit(0)
				}
			}

			// In The first diagonal
			if i == 0 {
				if board[i+4] == joueur.symbol && board[i+8] == joueur.symbol {
					clearConsole("")
					PrintBoard()
					fmt.Printf("%v a gagné\n", joueur.name)
					os.Exit(0)
				}
			}

			// In the Second diagonal
			if i == 2 {
				if board[i+2] == joueur.symbol && board[i+4] == joueur.symbol {
					clearConsole("")
					PrintBoard()
					fmt.Printf("%v a gagné\n", joueur.name)
					os.Exit(0)
				}
			}
		}
	}

	if size() == 9 {
		PrintBoard()
		fmt.Println("Egalité")
		os.Exit(0)
	}
}

func play(message1, message2, message string, joueur1, joueur2 Joueur) {
	clearConsole(message1)
	fmt.Println(message)
	PrintBoard()
	for size() != 9 {
		Saisie(&joueur1.position, message1)
		remaining := getPosition()
		if remaining[joueur1.position - 1] == 1 {
			message := "Position déjà occupé\n"
			play(message1, message2, message, joueur1, joueur2)
			message = ""
			return
		}
		board[joueur1.position-1] = 'X'
		win(joueur1)
		clearConsole(message2)
		PrintBoard()
		Saisie(&joueur2.position, message2)
		remaining = getPosition()
		if remaining[joueur2.position - 1] == 1 {
			message := "Position déjà occupé\n"
			play(message1, message2, message, joueur1, joueur2)
			message = ""
			return
		}
		board[joueur2.position-1] = 'O'
		win(joueur2)
		clearConsole(message1)
		PrintBoard()
	}
}

func getPosition() [9]int {
	remaining := [9]int{}
	for i, v := range board {
		if v == 'X' || v == 'O' {
			remaining[i] = 1
		}
	}
	return remaining
}

func Saisie(position *int, message string) {
	fmt.Scan(position)
	c := 0
	for *position > 9 || *position < 1 {
		if c == 0 {
			message = "Mauvaise saisie\n" + message
		} 
		c++
		clearConsole(message)
		PrintBoard()
		fmt.Scan(position)
	}
}

func PrintBoard() {
	for i, val := range board {
		if i % 3 == 0{
			fmt.Println()
			fmt.Print(strings.Repeat(" ", 21))
			fmt.Println(strings.Repeat("_", 11))
			fmt.Println()
			fmt.Print(strings.Repeat(" ", 20))
			fmt.Print("|")
		}
		if val == 'X' || val == 'O' {
			if val == 'X' {
				fmt.Print("\033[38;2;0;0;255m ", string(val), "\033[0m", " |")
			} else if val == 'O' {
				fmt.Print("\033[38;2;0;255;0m ", string(val), "\033[0m", " |")
			}
		} else  {
			fmt.Print("   |")
		}
	}
	fmt.Println()
	fmt.Print(strings.Repeat(" ", 21))
	fmt.Println(strings.Repeat("_", 11))
}

func clearConsole(message string) {
	clearCmd := exec.Command("clear")
	clearCmd.Stdout = os.Stdout
	clearCmd.Run()
	fmt.Println(message)
}

func size() int {
	c := 0
	for _, v := range board {
		if v == 'X' || v == 'O' {
			c++
		}
	}
	return c
}