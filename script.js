let nombreTotalAllumettes = 50;
let allumettesAEnlever;
const affichage = document.querySelector("h2");// permet de sélectioner la phrase dans les balises h2

// Fonction permettant de lancer le jeu
function jeuDesAllumettes() {
    allumettesAEnlever = choisirNombreAllumettesAEnlever();
    nombreTotalAllumettes = calculNombreDAllumettes(allumettesAEnlever);
    changerAffichage(nombreTotalAllumettes);
    console.log(nombreTotalAllumettes); // a cause du prompt la phrase h2 n'est pas mise à jour
    if (nombreTotalAllumettes == 0) {
        alert("Vous avez gagné");// s'il n'a a plus d'allumettes c'est la victoire
    } else { jeuDesAllumettes() } // il reste au moins 1 allumette, on relance la partie
}

function calculNombreDAllumettes(allumettes) {
    nombreTotalAllumettes = nombreTotalAllumettes - allumettes;
    return nombreTotalAllumettes;
}

function changerAffichage(nombreTotalAllumettes) {
    affichage.innerText = `Il reste ${nombreTotalAllumettes} allumettes en jeu.`
}

function choisirNombreAllumettesAEnlever() {
    let allumettes = Number(prompt("Combien d'allumettes souhaitez-vous enlever?"));
    while (allumettes > 6 || allumettes < 1) {
        allumettes = Number(prompt("Combien d'allumettes souhaitez-vous enlever?(entre 1 et 6)"))
    }
    if (allumettes > nombreTotalAllumettes) {
        allumettes = Number(prompt(`Combien d'allumettes souhaitez-vous enlever? Il reste ${nombreTotalAllumettes}`))
    }
    return allumettes;
};


jeuDesAllumettes();