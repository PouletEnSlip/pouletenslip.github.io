function cocherDecocher(etat) {
    var cases = document.getElementsByTagName('input');
    for (var i=1; i<cases.length; i++) {
        if (cases[i].type == 'checkbox') {
            cases[i].checked = etat;
            changerTexte1();
        }
    }
}

function boutonCocher() {
    var fruits = document.getElementsByClassName('fruits');
    fruits[0].checked = true;
    fruits[1].checked = true;
    fruits[2].checked = true;
    cocher.checked = true;
    changerTexte1();
}

function boutonDecocher() {
    var fruits = document.getElementsByClassName('fruits');
    fruits[0].checked = false;
    fruits[1].checked = false;
    fruits[2].checked = false;
    cocher.checked = false;
    changerTexte1();
}

function changerTexte1() {
    var tableCheck = document.getElementsByClassName('fruits')
    var nb = 0;
    for (var i = 0; i < 3; i++) {
        if (tableCheck[i].checked == true) nb++;
        if (nb == 0) {
            texte1.style.color = "red";
            texte1.textContent = (`You didn't choose a fruit...`)
            cocher.checked = false;
            bouton1.disabled = false
            bouton2.disabled = true;
            bouton3.disabled = true;
        } else if (nb == 1) {
            texte1.style.color = "cyan";
            texte1.textContent = (`You have chosen 1 fruit.`);
            cocher.checked = false;
            bouton1.disabled = false;
            bouton2.disabled = false;
            bouton3.disabled = false;
        } else if (nb == 2) {
            texte1.style.color = "cyan";
            texte1.textContent = (`You have chosen 2 fruits.`);
            cocher.checked = false;
            bouton1.disabled = false;
            bouton2.disabled = false;
            bouton3.disabled = false;
        } else {
            texte1.style.color = "green";
            texte1.textContent = (`You have chosen 3 fruits.`);
            cocher.checked = true;
            bouton1.disabled = true;
            bouton2.disabled = false;
            bouton3.disabled = false;
        }
    }
}
  
function valider() {
    bouton3.disabled = true;
    var apple = document.getElementById("apple").checked
    var pear = document.getElementById("pear").checked
    var banana = document.getElementById("banana").checked
    if (apple == true) {
        apple = "<b>apple</b>"
        if ((pear == true && banana == false) || (pear == false && banana == true)) {
            apple = "<b>apple</b> and one "
        } else if (pear == true && banana == true) {
            apple = "<b>apple</b>, one "
        }
    } else {
        apple = ""
    }
    if (pear == true) {
        pear = "<b>pear</b>"
        if (banana == true) {
            pear = "<b>pear</b> and one "
        }
    } else {
        pear = ""
    }
    if (banana == true) {
        banana = "<b>banana</b>"
    } else {
        banana = ""
    }

    var total = apple + pear + banana
    texte2.innerHTML = `You have chosen one ${total}.<br> Enjoy your meal!`;
}
