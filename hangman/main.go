package main

import (
	"fmt"
	"os"
	"time"
	"math/rand"
	"strings"
)

func main() {
	
	sample, err := os.ReadFile("./french.txt")

	rand.Seed(time.Now().UnixNano())

	checkError(err)

	allWords := strings.Split(string(sample), "\n")

	index := rand.Intn(len(allWords))

	_word := allWords[index]

	temp := strings.Split(_word, " : ")

	word := temp[0]

	n := len(word)

	definition := temp[1]

	compteur := 0
	clearConsole("Welcome in our game of Hangman")

	fmt.Println(definition)
	fmt.Println(strings.Repeat("_ ", n))

	letter := ""
	finded := ""

	find := toFind(word)

	failed := 0

	for failed != 9 {
		fmt.Println()
		fmt.Scanf("%v", &letter)
		if len(letter) != 1 {
			clearConsole(definition)
			fmt.Println("You are only allowed to enter one character")
			failed++
			Hangman(failed)
			PrintWord(word, finded)
		} else {
			if Contains(rune(letter[0]), word) {
				finded += letter
				if len(finded) == find {
					clearConsole(definition)
					PrintWord(word, finded)
					fmt.Printf("\nCongratulations, you are finded the right answer in %v tries\n", compteur+1)
					break
				}
				clearConsole(definition)
				PrintWord(word, finded)
			} else {
				clearConsole(definition)
				fmt.Println("Try again")
				failed++
				Hangman(failed)
				PrintWord(word, finded)
			}
		}
		compteur++
	}
}