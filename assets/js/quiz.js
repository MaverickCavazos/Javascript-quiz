var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var timeleft = 60;
var grade = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question: "What is the correct syntax for referring to an external js file to html?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },
  {
    question: "how do you target a specific html element by id?",
    choice1: "document.getElementById",
    choice2: "document.getElementsByClassName",
    choice3: "target.element(#id)",
    choice4: "add.event.listener",
    answer: 1
  },
  {
    question: "What is it called when you turn elements into a list?",
    choice1: "Function",
    choice2: "Array",
    choice3: "Loop",
    choice4: "String",
    answer: 2
  },
  {
    question: "What does a loop do?",
    choice1: "excute code a set number of times",
    choice2: "create a string",
    choice3: "writes html text",
    choice4: "Gets a document by ID",
    answer: 1
  }
];

//varANTS
var points = 20;
var questionLimit = 5;

startGame = () => {
  questionCounter = 0;
  grade = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

function getNewQuestion() {
  if (availableQuesions.length === 0 || questionCounter >= questionLimit) {
    localStorage.setItem("mostRecentScore", grade);

    window.location.href = "./end.html";
  }
  questionCounter++;
  var questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;
  

  choices.forEach(choice => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};


choices.forEach(choice => {
  choice.addEventListener("click", event => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = event.target;
    var selectedAnswer = selectedChoice.dataset["number"];

    var classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

     if (classToApply == "incorrect"){
         timeleft = timeleft - 10
     } else {
         grade = grade + points
         document.getElementById("score").innerHTML = "Score " + grade
     }


    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 10);
  });
});

var countDown = setInterval(function() {
if(timeleft <= 0){
    clearInterval(countDown);
    document.getElementById("timer").innerHTML = "TIMES UP";
    window.location.href = "./end.html";
  } else {
    document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);





startGame();