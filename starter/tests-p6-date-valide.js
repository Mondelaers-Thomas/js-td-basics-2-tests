/*
TESTS - PRÉPA 6 : Date valide
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
*/

/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/

/* Aide supplémentaire
 - Vous pouvez stocker dans une varaible maxJours le nombre de jours autorisés pour chaque mois :
	 - traiter le cas du mois de février où ce sera 28 ou 29 selon que l'année est bissextile ou pas ;
	 - puis traiter les cas où ce sera 30 ;
	 - dans les autres cas, c'est 31 ;
 - Il ne reste plus ensuite qu'à comparer le jour entré par l'utilisateur avec maxJour pour retourner true ou fasle
  selon que la date est valide ou pas.
  */
const maxJours = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
const date = prompt("Veuillez entrer date(jj-mm-aaaa)");
const year = Number(date.substring(6));
const month = date.substring(3, 5);
const day = date.substring(0, 2);
let isBissextile;
let isDateValide;

if (Number(day) > 31 || Number(month) > 12) {
	isDateValide = false;
	console.log(isDateValide);
} else if (month === "02" && day === "29") {
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				isBissextile = true; // divisible par 100 et par 400
			} else {
				isBissextile = false; // divisible par 100 mais pas par 400
			}
		} else {
			isBissextile = true; // divisible par 4 mais pas par 100
		}
	} else {
		isBissextile = false;
	}
	if (isBissextile) {
		isDateValide = isBissextile;
		console.log(isDateValide);
	} else {
		isDateValide = isBissextile;
		console.log(isDateValide);
	}
} else if (day === "30") {
	if (maxJours[Number(month) - 1] === "30") {
		isDateValide = true;
		console.log(isDateValide);
	} else {
		isDateValide = false;
		console.log(isDateValide);
	}
} else if (day === "31") {
	if (maxJours[Number(month) - 1] === "31") {
		isDateValide = true;
		console.log(isDateValide);
	} else {
		isDateValide = false;
		console.log(isDateValide);
	}
} else {
	isDateValide = true;
	console.log(isDateValide);
}