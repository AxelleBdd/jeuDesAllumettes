// DECLARATION DES VARIABLES
let nombreTotalAllumettes = 50;
let allumettesAEnlever;
const affichage = document.querySelector("h2");// permet de sélectioner la phrase dans les balises h2
const entreeJoueur = document.querySelector("#inputJoueur"); // permet de séléctionner 
const label = document.querySelector("label");
const click = document.querySelector("button");

// Assignation du max de l'input
let inputMax = document.querySelector("#inputJoueur");
inputMax.setAttribute("max",6);

// DECLARATION DES FONCTIONS

// Fonction permettant de lancer le jeu
function jeuDesAllumettes() {
    allumettesAEnlever = choisirNombreAllumettesAEnlever();
    nombreTotalAllumettes = calculNombreDAllumettes(allumettesAEnlever);
    changerAffichage(nombreTotalAllumettes);
    if (nombreTotalAllumettes == 0) {
        alert("Vous avez gagné");// s'il n'a a plus d'allumettes c'est la victoire
    };
}
// Fonction permettant de calculer le total d'allumettes restantes
function calculNombreDAllumettes(allumettes) {
    if (allumettes>nombreTotalAllumettes){ // si l'utilisateur veut prendre plus d'allumettes que disponibles, on lui force le maximum réstant
        alert(`Il n'y a pas assez d'allumettes, nous considerons que vous avez selectionné ${nombreTotalAllumettes} allumettes`);
        allumettes = nombreTotalAllumettes;
    }
    nombreTotalAllumettes -= allumettes;
    return nombreTotalAllumettes;
}
// Fonction permettant de mettre à jour le nombre d'allumettes restantes dans le tas
function changerAffichage(nombreTotalAllumettes) {
    affichage.innerText = `Il reste ${nombreTotalAllumettes} allumettes en jeu.`;
}
// Fonction qui permet de récupérer l'entrée de l'utilisateur
function choisirNombreAllumettesAEnlever() {
    let allumettes = entreeJoueur.value;
    if (allumettes > 6){
        alert("Le maximum étant 6, votre valeur est maintenant considérée comme un 6");
        allumettes = 6;
    } else if (allumettes < 0){
        alert("Le minimum étant de 0, votre valeur est maintenant considérée comme un 0");
        allumettes = 0;
    }
    return allumettes;
};

// LANCEMENT DE LA FONCTION DU JEU
click.addEventListener("click", () => {
    jeuDesAllumettes();
})
