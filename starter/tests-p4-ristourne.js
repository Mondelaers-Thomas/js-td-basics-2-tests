/*
TESTS - PRÉPA 4 : Ristourne
Un magasin fait 10% de réduction pour des achats dont le montant est supérieur à 50€
s’il y a au moins 3 enfants dans la famille ou si le montant des achats est supérieur à 125€.
Sinon, il fait 5% de réduction.
Attention, les ristournes ne sont pas cumulables.
Ecrire un programme JS qui affiche le montant de la réduction accordée
sur base de la situation de l’acheteur et du montant de ses achats.
*/
const totalMontant = Number(prompt("Quel est le montant de vos achats ?"));
const nombreEnfant = Number(prompt("Combien d'enfant avez-vous ?"));
const ristourne1 = 0.1;
const ristourne2 = 0.05;

let montantReduction;

if(totalMontant > 50 && (totalMontant >= 125 || nombreEnfant >= 3)) {
        montantReduction = totalMontant * ristourne1;
        console.log(`Le montant de la réduction accordé est de ${montantReduction}€`);
} else {
        montantReduction = totalMontant * ristourne2;
        console.log(`Le montant de la réduction accordé est de ${montantReduction}€`);
}
/* Valeurs de test :
- achat de 50 euros et moins de 3 enfants : 5% = 2.5€
- achat de 50 euros et 3 enfants : 5% = 2.5€
- achat de 60 euros et moins de 3 enfants : 5 % = 3€
- achat de 60 euros et 3 enfants : 10% = 6€
- achat de 125€ et moins de 3 enfants : 5 % = 6.25€
- achat de 125€ et 3 enfants : 10 % = 12.5€
- achat de 126€ et moins de 3 enfants : 10 % = 12.6€
- achat de 126€ et 3 enfants : 10 % = 12.6€
*/