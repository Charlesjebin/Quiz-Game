const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "New Delhi", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    }
    // Add more questions here
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const questionContainer = document.getElementById('question-container');

function startQuiz() {
    document.querySelector('h1').style.display = 'none';
    startButton.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.innerText = '';
    currentQuestionIndex = 0;
    questionContainer.style.display = 'block';
    setNextQuestion();
}

function setNextQuestion() {
resetState();
resultContainer.innerText = ''; // Reset result message
if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
} else {
    endQuiz();
}
// Reset button colors
answerButtons.forEach(button => {
    button.style.backgroundColor = '#4CAF50'; // Reset button color to green
});
}


function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        answerButtons[index].innerText = answer.text;
        answerButtons[index].dataset.correct = answer.correct;
    });
}

function resetState() {
    nextButton.style.display = 'none';
    answerButtons.forEach(button => {
        button.style.display = 'block';
        button.disabled = false;
    });
}

function checkAnswer(button) {
const correct = button.dataset.correct === "true";
if (correct) {
    resultContainer.innerText = 'Correct!';
    resultContainer.style.color = '#4CAF50'; // Green color for correct answer
} else {
    resultContainer.innerText = 'Incorrect!';
    resultContainer.style.color = '#f44336'; // Red color for incorrect answer
    button.style.backgroundColor = '#f44336'; // Change button color to red for incorrect answer
}
answerButtons.forEach(btn => {
    if (btn !== button) {
        btn.disabled = true; // Disable other buttons after an answer is selected
    }
});
nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    setNextQuestion();
}

function endQuiz() {
questionContainer.style.display = 'none';
resultContainer.innerText = 'Quiz Finished!';
resultContainer.style.color = '#333'; // Set color to black
startButton.style.display = 'block';
}