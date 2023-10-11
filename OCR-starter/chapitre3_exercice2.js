// Baccalauréat

/* 
- Stockez la moyenne (numérique) d'un candidtat dans une constante
- Ecrivez un test qui affiche dans la console
	* "Le candidat est recalé"" si la cote est inférieure à 10
	* "Le candidat est reçu" si la cote est entre 10 et 12
	* "Le candidat est reçu avec mention" si la cote est supérieur ou égale à 12
*/
const   average =parseInt(prompt("Quelle est votre moyenne ?"));
if(average < 10){
    console.log("Le candidat est recalé");
} else if(average >= 10 && average < 12){
    console.log("Le candidat est reçu");
} else  {
    console.log("Le candidat est reçu avec mention");
}

