// Récupération des données
var rouge = document.querySelector(".rouge");
var orange = document.querySelector(".orange");
var vert = document.querySelector(".vert");

var btnAuto = document.querySelector(".btnAuto");
var btnBlink = document.querySelector(".btnBlink");
var btnOff = document.querySelector(".btnOff");

// Listener
btnAuto.addEventListener("click", turnAuto);
btnBlink.addEventListener("click", orangeBlink);
btnOff.addEventListener("click", turnOff);


// Pour clear les "timeOut"
var clear1;
var clear2;
var clear3;
var clear4;
var clear5;
var clear6;


// ----- Fonctions pour la couleur des feux -----
function redLight() {
    orange.style.backgroundColor = "grey";
    rouge.style.backgroundColor = "darkred";
    clear1 = setTimeout(greenLight, 1000);
}
function orangeLight() {
    vert.style.backgroundColor = "grey";
    orange.style.backgroundColor = "darkorange";
    clear2 = setTimeout(redLight, 1500);
}

function greenLight() {
    rouge.style.backgroundColor = "grey";
    vert.style.backgroundColor = "darkgreen";
    clear3 = setTimeout(orangeLight, 1500);
}
// ----- Fonctions pour la couleur des feux -----


// ----- Fonctions pour les boutons -----
function turnAuto() {
    resetTimetout();
    clear6 = setTimeout(greenLight, 500);
    btnOff.classList.remove("active");
    btnAuto.classList.add("active");
    btnBlink.classList.remove("active");
}

function orangeBlink() {
    resetTimetout();
    orange.style.backgroundColor = "darkorange";
    clear4 = setTimeout(orangeToGrey, 500)
    btnOff.classList.remove("active");
    btnAuto.classList.remove("active");
    btnBlink.classList.add("active");
}

function orangeToGrey() {
    orange.style.backgroundColor = "grey";
    clear5 = setTimeout(orangeBlink, 500);
}

function turnOff() {
    resetTimetout();
    btnOff.classList.add("active");
    btnAuto.classList.remove("active");
    btnBlink.classList.remove("active");
}
// ----- Fonctions pour les boutons -----

// ----- Fonctions pour clear les "timeOut" -----
function resetTimetout() {
    clearTimeout(clear1);
    clearTimeout(clear2);
    clearTimeout(clear3);
    clearTimeout(clear4);
    clearTimeout(clear5);
    clearTimeout(clear6);
    rouge.style.backgroundColor = "grey";
    orange.style.backgroundColor = "grey";
    vert.style.backgroundColor = "grey";
}
// ----- Fonctions pour clear les "timeOut" -----


// ----- Sandbox -----


// ----- Sandbox -----

