var gameScore = 0;
$(document).ready(function(){
    
    //score to reach
   
    // make the score random
function targetScore(min,max)
    {
        gameScore= Math.floor(Math.random()*(max-min+1)+min);
    }

    // place target score into html
targetScore(19,120);  
$("#number-to-guess").text(gameScore);

// random note value
var randomNum = function() {
   return Math.floor(Math.random() * 12) + 1;
}

//counter
var counter= 0;
var numOptions = [
    {
        num: randomNum(), 
        path: "assets/images/eighth-note2.png"

    },
    {
        num: randomNum(),
        path: "assets/images/half-note.png"
    },
    {
        num: randomNum(), 
        path: "assets/images/sixteenth-note.png"

    },
    {
        num: randomNum(),
        path: "assets/images/whole-note.jpg"
    },
];
var wins = 0;
var losses = 0;



for(var i = 0; i < numOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");
        
    imageCrystal.attr("src", numOptions[i].path);

    imageCrystal.attr("data-crystalvalue", numOptions[i].num);

    $("#eighth-note").append(imageCrystal);
}

//event for click
$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#score").html("Your score: "+counter);

    //player wins if their score equals the target score
    if (counter === gameScore) {
        alert("You win!");
        wins++;
        $("#wins").html("Wins: "+wins);
        targetScore(19,120);
        $("#number-to-guess").text(gameScore);
        counter = 0;
        
    }  
    //player loses if their score goes over- price is wrong...
    else if (counter >= gameScore) {
        alert("You lose!")
        losses++;
        $("#losses").html("Losses: "+losses);
        targetScore(19,120);
        $("#number-to-guess").text(gameScore);
        counter = 0;
    }
console.log(gameScore);
});
})
