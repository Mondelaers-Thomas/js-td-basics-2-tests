/*
TESTS - PRÉPA 3 : kw
Ecrire un programme JS qui calcule le coût d’une consommation électrique.
L’utilisateur entre le nombre de KW consommés.
Les 30 premiers KW sont à 25 centimes le KW
Les 31 à 50èmes KW sont à 20 centimes le KW
Les 51 à 70èmes KW sont à 15 centimes le KW
Les KW suivants sont à 10 centimes le KW
*/
const kwCons = Number(prompt("Entrez votre consommation électrique en KW"));
let prixTot;
if(kwCons <= 30){
    prixTot = (kwCons * 0.25);
    console.log(`Le montant à payer s'élève à ${prixTot}€`);
} else if(kwCons > 30 && kwCons <= 50){
    prixTot = (30 * 0.25);
    prixTot = prixTot + ((kwCons - 30) * 0.20);
    console.log(`Le montant à payer s'élève à ${prixTot}€`);
}else if(kwCons > 50 && kwCons <= 70) {
    prixTot = (30 * 0.25);
    prixTot = prixTot + (20 * 0.20);
    prixTot = prixTot + ((kwCons - 50) * 0.15);
    console.log(`Le montant à payer s'élève à ${prixTot}€`);
} else {
    prixTot = (30 * 0.25);
    prixTot = prixTot + (20 * 0.20);
    prixTot = prixTot + (20 * 0.15);
    prixTot = prixTot + ((kwCons - 70) * 0.10);
    console.log(`Le montant à payer s'élève à ${prixTot}€`);
}
/*
Valeurs de test :
- 30 KW => 750 centimes = 7.5 €
- 31 KW => 30 * 25 + 1 * 20 = 770 centimes = 7.7 €
- 40 KW => 30 * 25 + 10 * 20 = 750 + 200 = 950 centimes = 9.5 €
- 50 KW => 30 * 25 + 20 * 20 = 750 + 400 = 1150 centimes = 11.5 €
- 51 KW => 30 * 25 + 20 * 20 + 1 * 15 = 750 + 400 + 15 = 1165 centimes = 11.65 €
- 60 KW => 30 * 25 + 20 * 20 + 10 * 15 = 750 + 400 + 150 = 1300 centimes = 13 €
- 70 KW => 30 * 25 + 20 * 20 + 20 * 15 = 750 + 400 + 300 = 1450 centimes = 14.5 €
- 71 KW => 30 * 25 + 20 * 20 + 20 * 15 + 1 * 10 = 750 + 400 + 300 + 10 = 1460 centimes = 14.6 €
- 80 KW => 30 * 25 + 20 * 20 + 20 * 15 + 10 * 10 = 750 + 400 + 300 + 100 = 1550 centimes = 15.5 €
*/