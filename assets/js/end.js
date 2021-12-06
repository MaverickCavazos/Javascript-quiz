var username = document.getElementById('username');
var saveScore = document.getElementById('saveScore');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);


finalScore.innerText = "Final Score is " + mostRecentScore;

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

function savehighScore(event){
    event.preventDefault();

    var score = {
        score:mostRecentScore,
        name: username.value,
};

highScores.push(score);

highScores.sort( (a,b) => b.score - a.score)

highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.href="./highscores.html";

console.log(highScores);
};