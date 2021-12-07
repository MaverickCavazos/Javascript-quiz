var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score mt-5 font-weight-bold">${score.name} - ${score.score}</li>`;
  })
  .join("");