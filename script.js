// DECLARATION DES VARIABLES
let nombreTotalAllumettes = 50;
let nombreAllumettes;
let allumettesAEnlever;
const affichage = document.querySelector("h2");// permet de sélectioner la phrase dans les balises h2
const entreeJoueur1 = document.querySelector("#inputJoueur1"); // permet de séléctionner l'input du joueur 1
const entreeJoueur2 = document.querySelector("#inputJoueur2"); // permet de séléctionner l'input du joueur 2
const entreeJoueur3 = document.querySelector("#inputJoueur3"); // permet de séléctionner l'input du joueur 3
const entreeJoueur4 = document.querySelector("#inputJoueur4"); // permet de séléctionner l'input du joueur 4
const clickJoueur1 = document.querySelector("#boutonJoueur1"); // bouton valider du joueur 1
const clickJoueur2 = document.querySelector("#boutonJoueur2"); // bouton valider du joueur 2
const clickJoueur3 = document.querySelector("#boutonJoueur3"); // bouton valider du joueur 3
const clickJoueur4 = document.querySelector("#boutonJoueur4"); // bouton valider du joueur 4

// DECLARATION DES FONCTIONS

// Fonction permettant de lancer le jeu
function jeuDesAllumettes(numeroJoueur) {
    nombreAllumettes = choixDuJoueurAcif(numeroJoueur);
    allumettesAEnlever = choisirNombreAllumettesAEnlever(nombreAllumettes);
    nombreTotalAllumettes = calculNombreDAllumettes(allumettesAEnlever);
    changerAffichage(nombreTotalAllumettes);
    if (nombreTotalAllumettes == 0) {
        alert(`Le joueur ${numeroJoueur} à gagné`);// s'il n'a a plus d'allumettes c'est la victoire
    };
}
// Fonction pour choisir le joueur actif
function choixDuJoueurAcif(joueur){
let allumettes;
    switch (joueur) {
        case joueur = 1:
            allumettes = entreeJoueur1.value;
        break;
        case joueur = 2:
            allumettes = entreeJoueur2.value;
        break;
        case joueur = 3:
            allumettes = entreeJoueur3.value;
        break;
        case joueur = 4:
            allumettes = entreeJoueur4.value;
        break;
    } 
    return allumettes;
}
// Fonction qui permet de récupérer l'entrée de l'utilisateur
function choisirNombreAllumettesAEnlever(allumettes) {
    if (allumettes > 6){
        alert("Le maximum étant 6, votre valeur est maintenant considérée comme un 6");
        allumettes = 6;
    } else if (allumettes < 1){
        alert("Le minimum étant de 1, votre valeur est maintenant considérée comme un 1");
        allumettes = 1;
    }
    return allumettes;
};
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
    affichage.innerText = `Il reste ${nombreTotalAllumettes} allumettes dans le tas.`;
}


// LANCEMENT DE LA FONCTION DU JEU
// Lorsque le joueur 1 joue
clickJoueur1.addEventListener("click", () => {
    jeuDesAllumettes(1);
    clickJoueur1.disabled = true;
    entreeJoueur1.disabled = true;
    clickJoueur2.disabled = false;
    entreeJoueur2.disabled = false;
    clickJoueur3.disabled = true;
    entreeJoueur3.disabled = true;
    clickJoueur4.disabled = true;
    entreeJoueur4.disabled = true;
})

// Lorsque c'est le joueur 2 qui joue
clickJoueur2.addEventListener("click", () => {
    jeuDesAllumettes(2);
    clickJoueur1.disabled = true;
    entreeJoueur1.disabled = true;
    clickJoueur2.disabled = true;
    entreeJoueur2.disabled = true;
    clickJoueur3.disabled = false;
    entreeJoueur3.disabled = false;
    clickJoueur4.disabled = true;
    entreeJoueur4.disabled = true;
})

// Lorsque c'est le joueur 3 qui joue
clickJoueur3.addEventListener("click", () => {
    jeuDesAllumettes(3);
    clickJoueur1.disabled = true;
    entreeJoueur1.disabled = true;
    clickJoueur2.disabled = true;
    entreeJoueur2.disabled = true;
    clickJoueur3.disabled = true;
    entreeJoueur3.disabled = true;
    clickJoueur4.disabled = false;
    entreeJoueur4.disabled = false;
})

// Lorsque c'est le joueur 4 qui joue
clickJoueur4.addEventListener("click", () => {
    jeuDesAllumettes(4);
    clickJoueur1.disabled = false;
    entreeJoueur1.disabled = false;
    clickJoueur2.disabled = true;
    entreeJoueur2.disabled = true;
    clickJoueur3.disabled = true;
    entreeJoueur3.disabled = true;
    clickJoueur4.disabled = true;
    entreeJoueur4.disabled = true;
})