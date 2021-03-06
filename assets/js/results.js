const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const endScore = document.getElementById('endScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highscores')) || [];



endScore.innerText = mostRecentScore;



//this makes it so that you cannot submit a score to the leaderboard without entering a value into the initials box 
initials.addEventListener('keyup', () => {
    
    saveScoreBtn.disabled = !initials.value;
});

saveHighScore = (e) => {
    e.preventDefault();


const score = {
    score: mostRecentScore,
    name: initials.value,
};


highScores.push(score);
    
    

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/");
};