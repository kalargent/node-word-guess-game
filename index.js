var Word = require("./word"); 
var inquirer = require("inquirer"); 

// ARRAY TO CAPTURE THE WORD LIST AND LETTERS
var letters = ["abcdefghijklmnopqrstuvwxyz"];  
var wordLib = ["dog", "cat", "bird", "chinchilla", "hamster", "ferret"]; 
var randomWord = wordLib[Math.floor(Math.random() * wordLib.length)]; 
var word = new Word (randomWord);  
 
// console.log (randomWord); 
// var word = new Word (randomWord); 

startGame(); 
// console.log("game started"); 


// FUNCTION THAT STARTS GAME 
function startGame () { 
    console.log("game started"); 

    inquirer   
        .prompt ({
            name: "wannaGuess", 
            type: "list", 
            message: "Do you want to guess a word?", 
            choices: ["Yes", "Nah, I'm good"]
        })

        .then (function(response) { 
            var choice = response.wannaGuess; 
            // console.log ("you said " + choice); 

            if (choice == "Yes") {
                // console.log ("you said " + choice); 
                playgame(); 
            }

            else {
                // console.log ("you said " + choice); 
                noThanks(); 
            }
        })
}

// FUNCTION THAT RUNS GAME 
function playgame () { 
    console.log("Play Game"); 

    //DISPLAY THE RANDOM WORD AS BLANK AND LOG IT 
    console.log(randomWord); 
    
    console.log(word.display());

    // PROMPT THE USER TO ENTER A LETTER 
    inquirer
        .prompt ({
            name: "letterGuess", 
            type: "input", 
            message: "Guess a Letter"
        })

        // CHECK IF THE LETTER IS IN THE WORD
        .then (function (response){
            console.log(response.letterGuess); 
            
            // ACCESS WORD GUESS FUNCTION 
            word.guess(response.letterGuess); 

            // REDISPLAY THE WORD WITH THE GUESSED LETTER 
            console.log(word.display());

        })
}

// FUNCTION THAT EXITS IF YOU SAY NO THANKS
function noThanks () { 
    console.log ("OK, maybe another day. Bye!"); 
}