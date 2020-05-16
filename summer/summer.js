function loadSummer() {
    // ADJECTIVES -----------------------------------------------------------
    var backupAdjectives = [ 'hungry', 'dizzy', 'itchy', 'bloody', 'offensive', 'alcoholic', 'free-loading', 'sadistic', 'hairless', 'domesticated', 'frozen', 'unholy', 'drunken'  ];

    function randomBackupAdj() {
      return Math.floor(Math.random() * (backupAdjectives.length) );
    }

    var randomAdj = randomBackupAdj();
    var adjective = prompt("(s) enter adj: ");

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
    var backupNouns = [ 'army of chinchillas', 'factory reset button', 'marketing idea', 'brethren', 'broken promise', 'ice cold beer', 'quarantini'];

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


    // VERBS -----------------------------------------------------------
    var backupVerbs = [ 'frolicking', 'canoodling', 'tripping', 'pounding shots of vodka', 'meandering', 'screaming', 'analyzing'];

    function randomBackupVerb () {
      return Math.floor(Math.random() * (backupVerbs.length) );
    }

    var randomVerb = randomBackupVerb();
    var verb = prompt('enter verb ending in "ing": ');

    // in case the user leaves the field empty, insert a randomly chosen verb
    if (verb === '') {
        verb += backupVerbs[randomVerb];
    }

    // write user input to html element with id="verb"
    function printVerb() {
        var spanVerb = document.getElementById("verb");
        spanVerb.innerHTML = verb;
        return verb;
    }
    printVerb();


    // NAMES -----------------------------------------------------------
    var backupNames = [ 'Enrique Iglesias', 'Kanye West', 'Karen', 'Mickey Mouse'];

    function randomBackupName () {
      return Math.floor(Math.random() * (backupNames.length) );
    }

    var randomName = randomBackupName();
    var name = prompt('enter a name: ');

    // in case the user leaves the field empty, insert a randomly chosen name
    if (name === '') {
        name += backupNames[randomName];
    }

    // write user input to html element with id="verb"
    function printName() {
        var spanName = document.getElementById("name");
        spanName.innerHTML = name;
        return verb;
    }
    printName();


    // OCCUPATIONS -----------------------------------------------------------
    var backupOcc = [ 'gynecologist', 'dog walker', 'pizza delivery man', 'penguin breeder'];

    function randomBackupOcc () {
      return Math.floor(Math.random() * (backupOcc.length) );
    }

    var randomOcc = randomBackupOcc();
    var occ = prompt('enter an occupation: ');

    // in case the user leaves the field empty, insert a randomly chosen occupation
    if (occ === '') {
        occ += backupOcc[randomOcc];
    }

    // write user input to html element with id="occ"
    function printOcc() {
        var spanOcc = document.getElementById("occ");
        spanOcc.innerHTML = occ;
        return occ;
    }
    printOcc();
} //end loadSummer()























