/*
TESTS - PRÉPA 2 : Les restos du cœur
Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.
Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.
*/
let prixPaye = 1000;
let remiseClient;
let montantVerse;
const reduction = 0.1;

if(prixPaye >= 25){
    remiseClient = prixPaye*reduction;
    prixPaye = prixPaye - remiseClient;
    if(remiseClient >= 5){
        montantVerse = remiseClient * reduction;
        if(montantVerse <= 2){
            console.log(`Le montant à payer est de ${prixPaye}€`);
            console.log(`Le montant versé aux restos du cœur est de ${montantVerse}€`);
        } else {
            console.log(`Le montant à payer est de ${prixPaye}€`);
            console.log("Le montant versé aux restos du cœur est de 2€")
        }
    } else {
        console.log(`Le montant à payer est de ${prixPaye}€`);
        console.log("Le montant n'est pas assez élevé pour faire de versement aux restos du cœur :(");
    }
} else {
    console.log(`Le montant à payer est de ${prixPaye}€`);
    console.log("Le montant n'est pas assez élevé pour faire de versement aux restos du cœur :(");
}

/* Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/