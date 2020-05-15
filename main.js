//var adjective;

//var allInstructions = [
//    ['Please type an adjective: ', 'Please type a verb: ', 'Please type a noun: '],
//    ["Oops! You left this blank. Please enter an adjective.", "Oops! You left this blank. Please enter a verb.", "Oops! You left this blank. Please enter an noun."],
//    ["Oops! This is not a word. Please enter a valid adjective.", "Oops! This is not a word. Please enter a valid verb.", "Oops! This is not a word. Please enter a valid noun."]
//];

//var adjInstructions = ['Please type an adjective: ', "Oops! You left this blank. Please enter an adjective.", "Oops! This is not a word. Please enter a valid adjective."];

//var valid = true;
//var word;

//while (i=5) {
//   for ( var i=1; i<5; i+=1 ) {
//     word = prompt("Question " + i + ": " + "enter an adjective");
//     break;
//   } 
//}


//for (var i=0; i<adjInstructions.length; i+=1) {
//        var adjective = prompt(adjInstructions[i]);
//}

//while (adjective === '' || adjective === typeof Number) {
//}

//    if (adjective === '') {
//        adjective = prompt("Oops! You left this blank. Please enter an adjective.")
//    } else if (adjective === typeof Number) {
//        adjective = prompt("Oops! This is not a word. Please enter a valid adjective.")
//    } 
//    break;

//alert("Oops! This field can't be blank. Please enter an adjective.")
//var adjective;

//changes
function getAdjective() {
    var adjective = prompt('Please type an adjective: '); 
    if (adjective === '') {
        alert("nope, try again bruh");
        adjective;
    }
}
getAdjective();
// verbs
var verb;
function getVerb() {
    verb = prompt('Please type a verb: '); 
    if (verb === '') {
        prompt("Oops! You left this blank. Please enter a verb.")
    } else if (verb === typeof Number || verb === typeof Boolean) {
        prompt("Oops! This is not a word. Please enter a valid verb.")
    } else {
        console.log("valid verb");
    }
}
getVerb();

// nouns and last alert
var noun;
//alert('All done. Ready for the message?');

function getNoun() {
    noun = prompt('Please type a noun: '); 
    if (noun === '') {
        prompt("Oops! You left this blank. Please enter a noun.")
    } else if (noun === typeof Number || noun === typeof Boolean) {
        prompt("Oops! This is not a word. Please enter a valid noun.")
    } else {
        console.log("valid noun");
    }
    alert('All done. Ready for the message?');
}
getNoun();

// creating my own print function, and adding the story to the pre-existing HTML div
function print() {
    var div = document.getElementById('story'); //grab the div i want to put story in
    var sentence = "There once was a " + adjective + " programmer who wanted to use JavaScript to " + verb + " the " + noun + ".";
    div.innerHTML = sentence;
}

// call all functions
//getAdjective();
//getVerb();
//getNoun();
print();


