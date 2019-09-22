const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "What kind of high do you prefer?",
        choice1: "energetic & talkative",
        choice2: "Calm & Relaxing",
        choice3: "a heathy mix of the choice 1 and 2",
        choice4: "Therapeutic sort of high",
        answer: 1
    },
    {
        question:
            "Do ypu have issues with sleep?",
        choice1: "Often",
        choice2: "Sometimes",
        choice3: "Not Often",
        choice4: "Never",
        answer: 3
    },
    {
        question: " When do you usually smoke your first bowl?",
        choice1: "Daytime",
        choice2: "Evening",
        choice3: "No Preference",
        choice4: "When Im in pain",
        answer: 4
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    console.log(availableQuesions);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();