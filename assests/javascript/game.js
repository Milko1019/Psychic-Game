var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var curGuess


document.onkeyup = function(event){
    console.log(event.key); 
    var userGuess = event.key.toLocaleLowerCase();
    // var guessedLetters = [userGuess]

    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "h" || userGuess === "i"|| userGuess === "j"|| userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "k" || userGuess === "y" || userGuess === "z") {
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // console.log("my guess: " + userGuess + " | computer guess: " + computerGuess);
    } else {
        alert("Please press somthing A-Z");
        guessLeft++;
    }

    if (userGuess === computerGuess) {
        wins++
        guessLeft = 9;
    } else {
        guessLeft--;
        curGuess = userGuess;
    }
        
    if (guessLeft < 1) {
        guessLeft = 9;
        losses++;
    }

    // if (userGuess = curGuess) {
    //     curGuess = userGuess;
    // }

    if (userGuess === computerGuess){
        userGuess.push(curGuess);
        // guessedLetters.push(userGuess);
    }


    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessLeft").textContent = guessLeft;
    document.getElementById("curGuess").textContent = curGuess;
    // document.getElementById("guessedLetters").textContent = guessedLetters;


}