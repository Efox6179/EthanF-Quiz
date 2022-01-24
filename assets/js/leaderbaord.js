const highScoresList = document.getElementById("highScoresList");
//this is pulling the highscores from local storage 
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
      //this is what you see posted on the leaerbiard
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");