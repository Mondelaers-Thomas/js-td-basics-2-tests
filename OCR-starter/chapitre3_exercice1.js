// Jour suivant

/* 
- Stockez le jour actuel (nom du jour, type texte) dans une constante
- Ecrivez des tests qui stockent dans une variable le nom du jour suivant dans chaque cas de figure 
et, si le nom du jour qui se trouve dans la constante n'est pas un des 7 de jours de la semaine,
affiche dasn la console "Erreur : jour non reconnu !"
- Testez si la variable qui contient le nom du jour n'ets pas vide et,
dans ce cas, affichez dans la console le message "Demain, nous serons …"
*/
//-- Création du tableau des jours de la semaine :
const dayOfTheWeek = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
//-- Création de la constante du jour actuel :
const currentDate = new Date();
const toDay = dayOfTheWeek[currentDate.getDay() -1];

let tomorrowDay;

switch (toDay){
    case dayOfTheWeek[0] :
        tomorrowDay = dayOfTheWeek[1];
        break
    case dayOfTheWeek[1] :
        tomorrowDay = dayOfTheWeek[2];
        break
    case dayOfTheWeek[2] :
        tomorrowDay = dayOfTheWeek[3];
        break
    case dayOfTheWeek[3] :
        tomorrowDay = dayOfTheWeek[4];
        break
    case dayOfTheWeek[4] :
        tomorrowDay = dayOfTheWeek[5];
        break
    case dayOfTheWeek[5] :
        tomorrowDay = dayOfTheWeek[6];
        break
    case dayOfTheWeek[6] :
        tomorrowDay = dayOfTheWeek[0];
        break
    default:
        console.log("Erreur: jour non reconnu !");
}

if (tomorrowDay){
    console.log(`Demain nous serons ${tomorrowDay}`);
} else {
    console.log(`Erreur: nom est vide ou non reconnu !`);
}

