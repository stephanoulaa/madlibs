// define variables
var adjective;
var verb;
var noun;

// define functions
function getAdjective() {
    adjective = prompt('Please type an adjective: '); 
    if (adjective === '') {
        alert("Oops! You left this blank. Please enter an adjective.")
    } else if (adjective !== typeof String) {
        alert("Oops! This is not a word. Please enter a valid adjective.")
    }
}

function getVerb() {
    verb = prompt('Please type a verb: '); 
    if (verb === '') {
        alert("Oops! You left this blank. Please enter a verb.")
    } else if (verb !== typeof String) {
        alert("Oops! This is not a word. Please enter a valid verb.")
    }
}

function getNoun() {
    noun = prompt('Please type a noun: ') 
    if (noun === '') {
        alert("Oops! You left this blank. Please enter a noun.")
    } else if (noun !== typeof String) {
        alert("Oops! This is not a word. Please enter a valid noun.")
    }
    alert('All done. Ready for the message?');
}

// creating my own print function, and adding the story to the pre-existing HTML div
function print() {
    var div = document.getElementById('story'); //grab the div i want to put story in
    var sentence = "There once was a "+adjective + " programmer who wanted to use JavaScript to " + verb + " the " + noun + ".";
    div.innerHTML = sentence;
}

// call all functions
getAdjective();
getVerb();
getNoun();
print();