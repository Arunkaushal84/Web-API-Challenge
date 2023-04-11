// Define the quiz questions as an array of objects
const quizQuestions = [
  {
    question: "Commonly used data types do not include __________.",
    choices: ["numbers", "booleans", "strings", "alerts"],
    correctAnswer: "alerts"
  },
  {
    question: "The conditions in an IF/else statement is enclosed within ___________.",
    choices: ["parentheses", "curly brackets", "quotes", "square brackets"],
    correctAnswer: "parentheses"
  },
  {
    question: "Arrays in Javascript can be used to store ________.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },
  {
    question: "String values must be enclosed within __________ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is ________.",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log"
  }
];

// Define global variables
let currentQuestionIndex = 0;
let time = quizQuestions.length * 15;
let timerId;

// Define DOM elements
const startButton = document.getElementById("start-button");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const timeEl = document.getElementById("time");
const initialsEl = document.getElementById("initials");
const submitButton = document.getElementById("submit-button");

// Define functions
function startQuiz() {
  // Hide the start button and show the quiz
  startButton.style.display = "none";
  questionEl.style.display = "block";
  choicesEl.style.display = "block";
  timeEl.style.display = "block";

  // Start the timer
  timerId = setInterval(function() {
    time--;
    timeEl.textContent = "Time: " + time;

    if (time <= 0) {
      endQuiz();
    }
  }, 1000);

  // Show the first question
  showQuestion();
}

function showQuestion() {
  // Get the current question from the quizQuestions array
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Update the question and choices DOM elements
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion.choices[i];
    choicesEl.appendChild(choiceButton);
    choiceButton.addEventListener("click", function() {
      checkAnswer(choiceButton.textContent);
    });
  }
}

function checkAnswer(choice) {
  // Check if the choice matches the correct answer
  if (choice === quizQuestions[currentQuestionIndex].correctAnswer) {
    feedbackEl.textContent = "Correct!";
  } else {
    feedbackEl.textContent = "Wrong!";
    time -= 10;
    if (time <= 0) {
      endQuiz();
    }
  }
  // Move to the next question or end the quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}
function endQuiz() {
  // Stop the timer
  clearInterval(timerId);
}
  // Hide
