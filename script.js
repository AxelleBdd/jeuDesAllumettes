//CREATION DE VARIABLES
const selectionJoueurs = document.querySelector("#selectionJoueur"); //Sélection du nombre de joueurs
const containerJoueur = document.querySelector("div"); //div pour ajouter chaque div de chaque joueur
let listeJoueurs = []; // Création d'un tableau vide pour y stocker le nombre de joueurs
let nombreTotalAllumettes = 50;
let nombreAllumettes;
let allumettesAEnlever;
const affichage = document.querySelector("h2");// permet de sélectioner la phrase dans les balises h2
const boutonRejouer = document.querySelector("#boutonRejouer");

//DECLARER LES FONCTIONS
// Permet de créer les dic=v de chaque joueur, en fonction du nombre de joueur sélectionné
function creerJoueurs() { 
    listeJoueurs.forEach((element) => { // On créer pour chaque élément du tableau, une div spécifique, un label avec les attributs nécéssaires et le bouton pour valider
        let joueurDiv = document.createElement("div");
        let labelJoueur = document.createElement("label");
        labelJoueur.innerText = `Joueur ${element}`;
        let inputJoueur = document.createElement("input");
        inputJoueur.setAttribute("type", "number");
        inputJoueur.setAttribute("id", `inputJoueur${element}`);
        inputJoueur.setAttribute("class", "inputJoueur");
        inputJoueur.setAttribute("min", "1");
        inputJoueur.setAttribute("max", "6");
        let boutonJoueur = document.createElement("button");
        boutonJoueur.setAttribute("id", `boutonJoueur${element}`);
        boutonJoueur.innerText = "Valider";
        joueurDiv.classList.add("joueur");
        containerJoueur.appendChild(joueurDiv); // on ajoute pour chaque joueur, sa div à la div générale
        joueurDiv.appendChild(labelJoueur); // on ajoute le label à la div du joueur
        joueurDiv.appendChild(inputJoueur); // on ajoute l'input à la div joueur
        joueurDiv.appendChild(boutonJoueur); // on ajoute le bouton à la div joueur
        boutonJoueur.addEventListener("click", () => {
            jeuDesAllumettes(inputJoueur.value, element);
        });
})}
// Fonction pour lancer le jeu et les autres fonctions
function jeuDesAllumettes(input, numéro) {
    nombreAllumettes = parseInt(input);
    console.log(nombreAllumettes);
    allumettesAEnlever = choisirNombreAllumettesAEnlever(nombreAllumettes);
    console.log(allumettesAEnlever);
    nombreTotalAllumettes = calculNombreDAllumettes(allumettesAEnlever);
    console.log(nombreTotalAllumettes);
    changerAffichage(nombreTotalAllumettes);
    if (nombreTotalAllumettes == 0) {
        containerJoueur.style.display = "none";
        boutonRejouer.style.display = "inline-block";
        affichage.innerText = `🎉 Le joueur ${numéro} à gagné ! 🎉`;
    };
}
// Fonction qui permet de vérifier l'entrée de l'utilisateur
function choisirNombreAllumettesAEnlever(allumettes) {
    if (allumettes > 6) {
        alert("Le maximum étant 6, votre valeur est maintenant considérée comme un 6");
        allumettes = 6;
    } else if (allumettes < 1) {
        alert("Le minimum étant de 1, votre valeur est maintenant considérée comme un 1");
        allumettes = 1;
    }
    return allumettes;
};
// Fonction permettant de calculer le total d'allumettes restantes
function calculNombreDAllumettes(allumettes) {
    if (allumettes > nombreTotalAllumettes) { // si l'utilisateur veut prendre plus d'allumettes que disponibles, on lui force le maximum réstant
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

// APPEL DE LA PREMIERE FONCTION
boutonRejouer.style.display = "none";
affichage.innerText = "Combien de joueurs participent ?";

selectionJoueurs.addEventListener("change", () => {
    let nombreJoueurs = parseInt(selectionJoueurs.value);
    for (let index = 1; index <= nombreJoueurs; index++) {
        listeJoueurs.push(index);
    }
    creerJoueurs();
    selectionJoueurs.style.display = 'none';
    affichage.innerText = "Il y a 50 allumettes dans le tas.";
})

boutonRejouer.addEventListener("click", () =>{
    selectionJoueurs.style.display = "inline-block";
    selectionJoueurs.value = "";
    boutonRejouer.style.display = "none";
    affichage.innerText = "Combien de joueurs participent ?";
})