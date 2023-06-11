package main

import (
	"os"
	"fmt"
	"os/exec"
)

func clearConsole(message string) {
	clearCmd := exec.Command("clear")
	clearCmd.Stdout = os.Stdout
	clearCmd.Run()
	fmt.Println(message)
}

func checkError(e error) {
	if e != nil {
		fmt.Println("We Encountered an error")
		os.Exit(0)
	}
}

func toFind(word string) int {
	compteur := 0
	for i:=0; i < len(word); i++ {
		compteur++
		for j:=i+1; j < len(word); j++ {
			if word[i] == word[j] {
				compteur--
				break
			}
		}
	}
	return compteur
}

func Contains(c rune, word string) bool {
	for _, v := range word {
		if c == v {
			return true
		}
	}
	return false
}

func PrintWord(word, finded string) {
	for _, c := range word {
		if Contains(c, finded) {
			fmt.Printf("%v ", string(c))
		} else {
			fmt.Print("_ ")
		}
	}
}

func Hangman(n int) {
	switch(n) {
	case 1:
		fmt.Println(h1)
	case 2:
		fmt.Println(h2)
	case 3:
		fmt.Println(h3)
	case 4:
		fmt.Println(h4)
	case 5:
		fmt.Println(h5)
	case 6:
		fmt.Println(h6)
	case 7:
		fmt.Println(h7)
	case 8:
		fmt.Println(h8)
	case 9:
		fmt.Println(h9)	
	}
}

var h1 = `
 o`

var h2 = `
 o
 |`

var h3 = `
 o
 |
 |`

var h4 = `
 o
 |
/|`

var h5 = `
 o
 |
/|\`

var h6 = `
 o
 |
/|\
 |`

var h7 = `
 o
 |
/|\
 |
 |`

var h8 = `
 o
 |
/|\
 |
/|`

var h9 = `
 o
 |
/|\
 |
/|\`
