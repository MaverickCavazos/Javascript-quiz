var username = document.getElementById('username');
var saveScore = document.getElementById('saveScore');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = "Final Score is " + mostRecentScore;

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

function saveHighScore(event){
    console.log("clicked the submit button");
    event.preventDefault();
};
