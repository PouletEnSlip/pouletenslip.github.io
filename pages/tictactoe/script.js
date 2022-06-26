var jeuActif = true;
var joueurActif = "X";
var etats = ["","","","","","","","",""];

var statusDisplay = document.querySelector('.message');
var gagnant = () => `${joueurActif} won!`;
var messageEgalite = () => `Draw!`;

var joueur = () => `It's ${joueurActif}'s turn`;
statusDisplay.innerHTML = joueur();

var conditionsGagner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

function clicCellules(clicSurCellule, clicCelluleIndex) {
    etats[clicCelluleIndex] = joueurActif;
    clicSurCellule.innerHTML = joueurActif;
    if (joueurActif === "X") {
        clicSurCellule.style.color = "cyan";
    }
    else {
        clicSurCellule.style.color = "green";
    }
}

function changerJoueur() {
    joueurActif = joueurActif === "X" ? "O" : "X";
    statusDisplay.innerHTML = joueur();
    if (joueurActif === "X") {
        statusDisplay.style.color = "cyan";
    }
    else {
        statusDisplay.style.color = "green";
    }
}

function verification() {
    let partieGagnee = false;
    for (let i = 0; i <= 7; i++) {
        var condGagner = conditionsGagner[i];
        let a = etats[condGagner[0]];
        let b = etats[condGagner[1]];
        let c = etats[condGagner[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            partieGagnee = true;
            break
        }
    }

    if (partieGagnee) {
        statusDisplay.innerHTML = gagnant();
        statusDisplay.style.color = "white";
        jeuActif = false;
        return;
    }

    let partieEgalite = !etats.includes("");
    if (partieEgalite) {
        statusDisplay.innerHTML = messageEgalite();
        statusDisplay.style.color = "white";
        jeuActif = false;
        return;
    }
    changerJoueur();
}

function lorsClicCellules(celluleCliquee) {
    var clicSurCellule = celluleCliquee.target;
    var clicCelluleIndex = parseInt(clicSurCellule.getAttribute('data-cell-index'));

    if (etats[clicCelluleIndex] !== "" || !jeuActif) {
        return;
    }
    clicCellules(clicSurCellule, clicCelluleIndex);
    verification();
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', lorsClicCellules));