const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const timetext = document.querySelector('time')
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let time = 0;
let availableQuestions = [];

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
        "choice2": "The 'Peoples Car",
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



const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    time = 0;
    score = 0;
    availableQuestions = [...questions];
    
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
if(availableQuestions.length ===0 ){
    return window.location.assign("../assets/html/results.html");
}

const questionIndex = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionIndex];
question.innerText = currentQuestion.question;


choices.forEach(choice => {
const number = choice.dataset['number'];
choice.innerText = currentQuestion['choice' + number];
})
//removes the question after its been used
availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
    if(!acceptingAnswers) return;
acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset['number'];
console.log(selectedAnswer);
getNewQuestion();
});
});

startGame();


//console.log(e.target)});