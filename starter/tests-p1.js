/*
TESTS - PRÉPA 1
Ecrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/
const prixArticle = 10;
const nombreArticle = Number(prompt("Combien d'article voulez-vous acheter ?"));
const reduction = 0.1; //(10% ristourne)
let prixTotal;

if(nombreArticle >= 20){
    prixTotal = (nombreArticle * prixArticle);
    prixTotal = prixTotal - (prixTotal * reduction);
} else {
    prixTotal = nombreArticle * prixArticle;
}
console.log(`Le prix total est de : ${prixTotal}`);