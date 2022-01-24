const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const endScore = document.getElementById('endScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

endScore.innerText = mostRecentScore;



username.addEventListener('keyup', () => {
    
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
};