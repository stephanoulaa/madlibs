// ADJECTIVES -----------------------------------------------------------
var backupAdjectives = [ 'hungry', 'dizzy', 'itchy', 'bloody', 'offensive', 'alcoholic', 'free-loading', 'sadistic', 'hairless', 'domesticated', 'frozen', 'unholy', 'drunken'  ];

function randomBackupAdj() {
  return Math.floor(Math.random() * (backupAdjectives.length) );
}

var randomAdj = randomBackupAdj();
var adjective = prompt("enter adj: ");

// in case the user leaves the field empty, insert a randomly chosen adjective
if (adjective === '') {
    adjective += backupAdjectives[randomAdj];
}

// write user input to html element with id="adjective"
function printAdj() {
    var spanAdj = document.getElementById("adjective");
    spanAdj.innerHTML = adjective;
    return adjective;
}
printAdj();



// NOUNS -----------------------------------------------------------
var backupNouns = [ 'army of chinchillas', 'factory reset button', 'marketing idea', 'brethren', 'mad cow disease', 'broken promises', 'ice cold beer'];

function randomBackupNoun () {
  return Math.floor(Math.random() * (backupNouns.length) );
}

var randomNoun = randomBackupNoun();
var noun = prompt("enter noun: ");

// in case the user leaves the field empty, insert a randomly chosen noun
if (noun === '') {
    noun += backupNouns[randomNoun];
}

// write user input to html element with id="noun"
function printNoun() {
    var spanNoun = document.getElementById("noun");
    spanNoun.innerHTML = noun;
    return noun;
}
printNoun();