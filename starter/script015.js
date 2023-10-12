/*****************************
* 15 - Logique booléenne
*/

// Préliminaires
/*
(source : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3043921-ajoutez-des-conditions)
*/

// 15-1. - LES OPÉRATEURS LOGIQUES

// 1°) L'opérateur logique ET

/*
1. Affichez dans la console le résultat de toutes les combinaisons possibles de true ET false
2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire
*/
/* true && false = false;
   false && true = false;
   true && true = true;
   false && false = false;
 */

// Une condition qui utilise l'opérateur logique ET
const hour = 8;
if(hour >= 6 && hour <= 12){
    console.log("C'est le matin");
}
/*
1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
2. Testez si le nombre est dans l'intervalle [0, 100]. Autrement dit, testez si 0 <= nombre <= 100. Si c'est le cas, affichez "… est compris entre 0 et 100".
*/
const numberAndTest = Number(prompt("Entrez un nombre"));
if(numberAndTest >= 0 && numberAndTest <= 100){
    console.log(`${numberAndTest} est compris entre 0 et 100`);
}

// 2°) L'opérateur logique OU

/* 
1. Affichez dans la console le résultat de toutes les combinaisons possibles de true OU false
2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chauqe ligne le résultat attendu dans un commentaire
*/
/*
    true || true = true;
    true || false = true;
    false || true = true;
    false || false = false;
 */


// Une condition qui utilise l'opérateur logique OU
const hourOrTest = 2;
if(hourOrTest < 6 || hourOrTest  === 23 || hourOrTest === 24){
    console.log("Tu devrais dormir !");
}
/*
1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
2. Testez si le nombre en dehors de l'intervalle [0, 100]. Si c'est le cas, affichez "… est en dehors de l'intervalle [0, 100]".
*/
const numberOrTest = Number(prompt("Entrez un nombre"));

if(numberOrTest < 0 || numberOrTest > 100){
   console.log(`${numberOrTest} est en dehors de l'intervalle [0, 100]`);
}

// 3°) L'opérateur logique NOT

/* Affichez dans la console le résultat NOT true puis le résultat de NOT false */



// Une condition qui utilise l'opérateur logique NOT
const coteNotTest = 5;
if(!coteNotTest<5){
    console.log("Tu n'as pas la moyenne :(");
}
/*
1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
2. Si ce nombre n'est pas supérieur à 100, affichez "… est inférieur ou égal à 100".
*/
const numberNotTest = Number(prompt("Entrez un nombre"));

if(!numberNotTest > 100){
    console.log(`${numberNotTest} est inférieur ou égal à 100`);
}

// 15-2. - LES ALTERNATIVES MULTIPLES

// 1°) Imbriquer des conditions

/* 
1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
2. Si ce nombre est positif, affichez "… est positif", sinon (c'est donc qu'il est négatif ou nul), vous allez faire un sous-test :
  1°) s'il est négatif, affichez "… est négatif", 
  2°) sinon, affichez "… est nul"
*/
const numberTest = Number(prompt("Entrez un nombre"));

if(numberTest > 0){
    console.log(`${numberTest} est positif`);
} else if(numberTest < 0){
    console.log(`${numberTest} est négatif`);
} else{
    console.log(`${numberTest} est nul`);
}

// 2°) Autre écriture pour le même test : le if / elseif / else

/* 
BUT : réaliser le même test que l'exercice précédent mais avec l'écriture if / elseif / else
1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
2. Affichez "… est positif", "… est négatif" ou "… est nul" selon le cas
*/
if(numberTest > 0){
    console.log(`${numberTest} est positif`);
} else if(numberTest < 0){
    console.log(`${numberTest} est négatif`);
} else{
    console.log(`${numberTest} est nul`);
}

// Une application

/* 
1. Stockez le prénom de la personne dans une variable firstName
2. Stockez son âge dans une variable age
3. a) Si la personne a moins de 13 ans, affichez le message "… est un petit garçon."
b) si elle a entre 13 et 20 ans, affichez "… est un adolescent."
c) si elle a entre 20 et 30 ans, affichez "… est un jeune homme."
d) sinon, affichez "… est un homme."
*/
const firstName = prompt("Quel est votre prénom ?");
const age = Number(prompt("Quel âge avez-vous ?"));

if(age<13){
    alert(`${firstName} est un petit garçon.`);
} else if(age >= 13 && age < 20){
    alert(`${firstName} est un adolescent.`);
} else if(age >= 20 && age < 30){
    alert(`${firstName} est un jeune homme.`);
} else {
    alert(`${firstName} est un homme.`);
}

// Autre application

/*
1. Demandez à l'utilisateur d'entrer l'information
  "Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
  soleil, vent, pluie ou neige."
2. Stockez cette information dans une variable meteo
3. a) s'il fait soleil, affichez le message "Sortez en t-shirt."
b) s'il y a du vent, affichez "Sortez en pull."
c) s'il pleut, affichez "Sortez en blouson."
d) s'il neige, affichez "Restez au chaud à la maison."
e) dans tous les autres cas (si la personne n'a rien répondu de tout ça —
  c.-à-d. qu'elle n'a entré aucun de ces qautre mots-là), affichez "Je n'ai pas compris !"
*/
const meteo = prompt("Quel temps fait-il dehors ?");

switch (meteo){
    case "soleil":
        alert("Sortez en t-shirt.");
        break
    case "vent":
        alert("Sortez en pull.");
        break
    case "pluie":
        alert("Sortez en blouson.");
        break
    case "neige":
        alert("Restez au chaud à la maison.");
        break
    default:
        alert("Je n'ai pas compris !");
}
