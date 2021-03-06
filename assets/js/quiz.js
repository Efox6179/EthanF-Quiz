const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const timeText = document.querySelector('timer')
const scoreText = document.getElementById('score');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;

let time = 60;


let availableQuestions = [];
//below are the questions that are in the questions.txt document
let questions = [
    {
        
        "question": "Which animal features in the logo for Lamborghini?",
        "choice1": "Horse",
        "choice2": "Bird",
        "choice3": "Frog",
        "choice4": "Bull",
        "answer": 4
        
      },
      {
        "question": "What does Volkswagen mean?",
        "choice1": "Station Wagon",
        "choice2": "The Peoples Car",
        "choice3": "Beetle Wagon",
        "choice4": "Wagon",
        "answer": 2
      },
      {
        "question": "What does BMW stand for?",
        "choice1": "Berlin Motor Works",
        "choice2": "Bavarian Motor Works",
        "choice3": "Belgian Motor Works",
        "choice4": "Bonvegas Motor Works",
        "answer": 2
      },
      {
        "question": "How many rings are in the Audi logo?",
        "choice1": "6",
        "choice2": "5",
        "choice3": "4",
        "choice4": "3",
        "answer": 3
      },
      {
        "question": "Which is the oldest car company still in business today?",
        "choice1": "Mercedes-Benz",
        "choice2": "Ferrari",
        "choice3": "Volkswagen",
        "choice4": "Ford",
        "answer": 1
      },
      {
        "question": "What animal is on the Porsche logo?",
        "choice1": "Horse",
        "choice2": "Goat",
        "choice3": "Bull",
        "choice4": "Bear",
        "answer": 1
      },
      {
        "question": "The Chevrolet logo is commonly referred to as ______?",
        "choice1": "X",
        "choice2": "Plus",
        "choice3": "Cross",
        "choice4": "Bow Tie",
        "answer": 4
      },
      {
        "question": "How many stars are on the Subaru logo?",
        "choice1": "4",
        "choice2": "5",
        "choice3": "6",
        "choice4": "7",
        "answer": 3
      },
      {
        "question": "What is the worlds all-time best-selling car?",
        "choice1": "Honda Civic",
        "choice2": "Toyota Corolla",
        "choice3": "Ford F150",
        "choice4": "Nissan Altima",
        "answer": 2
      },
      {
        "question": "What was the most popular car color in 2021?",
        "choice1": "Black",
        "choice2": "Silver/Gray",
        "choice3": "Blue",
        "choice4": "White",
        "answer": 4
      }
    ];


//this is how many points will be added for each correct response 
const CORRECT_BONUS = 10;
//this is what is referenced if i decide to add more than 10 questions to the array in the future but only want the quiz to be 10 questions 
const MAX_QUESTIONS = 10;

startGame = () => {
    time = 60;
 
    score = 0;
    //i found the spread syntax on w3 and it solved the problem  i was having with my old setup where all of my questions were listing on after aother 
    availableQuestions = [...questions];
    //this is my timer starting at 60 and when the timer is up it goes displays "finished" and goes to the results
    var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Finished";
  
    return window.location.assign("../html/results.html");
    
  } else {
    document.getElementById("timer").innerHTML = timeleft ;
  }
  timeleft -= 1;
}, 1000);
    
    getNewQuestion();
};

getNewQuestion = () => {
    //this checks each time it calls for another question to see if theres still at least one yet if the array is out of questions it will go to the end page
if(availableQuestions.length == 0){
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign("../html/results.html");
    
}


const questionIndex = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionIndex];
question.innerText = currentQuestion.question;


choices.forEach(choice => {
const number = choice.dataset['number'];
//this is how the code can tell the difference between the different choices in my questions.txt you can see each option has a number next to it 
choice.innerText = currentQuestion['choice' + number];
})

availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
    if(!acceptingAnswers) return;
acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset['number'];
//this applies the green and red background to the choices depending if it is correct or incorrect 
const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
//this applies the referenced correct bonus with a value of 10 points 
if(classToApply == 'correct') {
    bonusScore(CORRECT_BONUS);
}


selectedChoice.parentElement.classList.add(classToApply);

setTimeout( () => {

    selectedChoice.parentElement.classList.remove(classToApply);

getNewQuestion();

}, 1000
);


});
});
//this adds the bonus score value to the current score changing as answers are correctly answered
bonusScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();


//console.log(e.target)});