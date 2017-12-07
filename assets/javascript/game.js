var word; //variable to hold selected word
var wordList; // array of words = ["apple","banana","orange","kiwi","starfruit"];
var wordBlanks; //array to hold "_" for each word;
var guess; // variable to hold current guessed;
var guessList; // variable to hold compiled guesses;
var guessLeft;  //variable to hold guesses used;
var counter;  //variable to track correct guesses;
var winCounter; //variable to track wins
var winCounterList= []; //array to track wins
var total; //variable to hold total wins
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']; //array of possible letter choices;
var guessAdd; //variable to help compare guess to word;
//document.getElementById
var wordSpace = document.getElementById("currentWord"); //HTML to display word;
var guessSpace = document.getElementById("guessInfo"); //HTML to display guessesLeft;
var guessSpaceResult = document.getElementById("guessResult"); //HTML to display win/lose;
var guessLettersSpace = document.getElementById("guessLetters"); //HTML to display letters guessed;
var winSpace = document.getElementById("wins"); //HTML to display number of wins;
//function to start Game

//function to create blank word
function newGame() {
  wordList = ["carpet","kangaroo","pillow","television"];
  word = wordList[Math.floor(Math.random() * wordList.length)];
  wordBlanks = [];
  guessList = [];
  guessLeft = 10;
  counter = 0;  
  for (var i = 0; i < word.length; i++){
    wordBlanks.push("_");
    wordSpace.innerHTML = wordBlanks.join(" ");
  }
  guesses();
  guessLettersSpace.innerHTML=" ";
  guessSpaceResult.innerHTML=" ";
};
//function to update <#guessInfo>
function guesses(){
  winCounter = 0;
  guessSpace.innerHTML = "You have " + guessLeft + " guesses remaining";
  if (guessLeft<1){
    guessSpaceResult.innerHTML = "You Lost";
  }
  for (var i = 0; i<word.length; i++){
    if (counter === word.length){
      guessSpaceResult.innerHTML="You Won";
    }
  }
  if (counter === word.length){
    winCounter +=1;
  }
  if (winCounter> 0){
    winCounterList.push(winCounter);
  }
  total = 0;
  for (var i in winCounterList){
    total += winCounterList[i];
  }
  winSpace.innerHTML = "Win " + total;
};
//onClick function
document.onkeyup = function(event){
  guess = event.key;
  if(alphabet.indexOf(guess) <= -1){
    alert("you suck");
  }
  else
  if (guessList.indexOf(guess)!=-1){
    alert("you already guessed that");
  }
  else
  if (word.indexOf(guess)<=-1){
    alert ("incorrect letter");
    guessList.push(guess);
    guessLettersSpace.innerHTML = guessList.join(" ");
  }
  for (var i =0; i<word.length; i++){
    if (word[i] === guess){
      wordBlanks[i]= guess;
      wordSpace.innerHTML = wordBlanks.join(" ");
      counter +=1;
    }
  }
  guessAdd = (word.indexOf(guess));
  if (guessAdd === -1){
    guessLeft -= 1;
    guesses();
  }
  else{
    guesses();
  }
}
