package main

import (
	"fmt"
)

var board [9]byte

func main() {
	/**************** Déclaration des variables ********************/
	var joueur1 Joueur
	var joueur2 Joueur
	/**************** Déclaration des variables ********************/

	joueur1.symbol = 'X'
	joueur2.symbol = 'O'

	fmt.Println("Veuillez entrez le nom du Joueur 1: \n")
	fmt.Scan(&joueur1.name)

	fmt.Println("Veuillez entrez le nom du Joueur 2: \n")
	fmt.Scan(&joueur2.name)

	message1 := fmt.Sprintf("%v : Veuillez entrez un nombre compris entre 1 et 9 pour votre position", joueur1.name)
	message2 := fmt.Sprintf("%v : Veuillez entrez un nombre compris entre 1 et 9 pour votre position", joueur2.name)
	message := ""

	clearConsole(message1)
	play(message1, message2, message, joueur1, joueur2)

}
