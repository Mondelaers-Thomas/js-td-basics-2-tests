/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)
4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision. 
5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus
//-- 1. Calculez le score moyen de chaque équipe :
let JohnTeamTotalScore = 0;
let MikeTeamTotalScore = 0;
let MaryTeamTotalScore = 0;
const JohnTeamScore = [89, 120, 103];
const MikeTeamScore = [116, 94, 123];
const MaryTeamScore = [97, 134, 105];

//-- Addition des scores des deux équipes :
for(let i = 0; i < JohnTeamScore.length; i++){
    JohnTeamTotalScore += JohnTeamScore[i];
}
for(let i = 0; i < MikeTeamScore.length; i++){
    MikeTeamTotalScore += MikeTeamScore[i];
}
for(let i = 0; i < MaryTeamScore.length; i++){
    MaryTeamTotalScore += MaryTeamScore[i];
}
//-- Calcul des moyennes des deux équipes :
const avgJohnTeamScore = JohnTeamTotalScore / JohnTeamScore.length;
const avgMikeTeamScore = MikeTeamTotalScore / MikeTeamScore.length;
const avgMaryTeamScore = MaryTeamTotalScore / MaryTeamScore.length;

//-- 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen) et imprimez l'équipe gagnante dans la console avec son score moyen.
//-- Affichez l'équipe gagnante (moyenne la plus élevée) :
//--- avgJohnTeamScore > avgMikeTeamScore ? console.log(`L'équipe de John l'emporte avec une moyenne de ${avgJohnTeamScore}`) : console.log(`L'équipe de Mike l'emporte avec une moyenne de ${avgMikeTeamScore}`);

// avec bonus
if(avgJohnTeamScore > avgMaryTeamScore && avgJohnTeamScore > avgMikeTeamScore){ //L'équipe de John est gagnante.
    console.log(`L'équipe de John l'emporte avec une moyenne de ${avgJohnTeamScore}`);
} else if(avgMikeTeamScore > avgJohnTeamScore && avgMikeTeamScore > avgMaryTeamScore){ //L'équipe de Mike est gagnante.
    console.log(`L'équipe de Mike l'emporte avec une moyenne de ${avgMikeTeamScore}`);
} else if (avgMaryTeamScore > avgJohnTeamScore && avgMaryTeamScore > avgMikeTeamScore){ //L'équipe de Mary est gagnante.
    console.log(`L'équipe de Mary l'emporte avec une moyenne de ${avgMaryTeamScore}`);
} else if(avgMikeTeamScore === avgJohnTeamScore && avgMikeTeamScore > avgMaryTeamScore && avgJohnTeamScore > avgMaryTeamScore){ //L'équipe de Mike et John l'emporte.
    console.log(`L'équipe de John et Mike l'emporte par ex æquos avec une moyenne de ${avgJohnTeamScore}`);
} else if(avgMikeTeamScore === avgMaryTeamScore && avgMikeTeamScore > avgJohnTeamScore && avgMaryTeamScore > avgJohnTeamScore){ //L'équipe de Mike et Mary l'emporte.
    console.log(`L'équipe de Mary et Mike l'emporte par ex æquos avec une moyenne de ${avgMaryTeamScore}`);
} else if(avgJohnTeamScore === avgMaryTeamScore && avgJohnTeamScore > avgMikeTeamScore && avgMaryTeamScore > avgMikeTeamScore){ //L'équipe de John et Mary l'emporte.
    console.log(`L'équipe de Mary et John l'emporte par ex æquos avec une moyenne de ${avgMaryTeamScore}`);
} else{
    console.log("Tout les équipes sont gagnantes par ex æquos... Incroyable ! ");
}

