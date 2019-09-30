// Store the question id in a const
const question = document.getElementById("question");

// Store the choices id in a const
const choices = Array.from(document.getElementsByClassName("choice-text"));
const bodyTag = document.getElementsByTagName("body");

// QUESTIONS

let questionCounter = 0;
let acceptingAnswers = false;
let availableQuesions = [];

// Strains

let strains = [
  {
    id: "01",
    name: "King Kong",
    pro: {
      relaxed: 100,
      happy: 84,
      sleepy: 74,
      uplifted: 68,
      hungry: 63,
      insomnia: 100,
      pain: 47
    },
    con: {
      dryEyes: 100,
      dryMouth: 96,
      headaches: 79,
      paranoid: 68,
      hungry: 63
    },
    pointCounter: 0
  },

  {
    id: "02",
    name: "Ice Wreck",
    pro: {
      relaxed: 100,
      happy: 84.678,
      sleepy: 74.333,
      uplifted: 68.423,
      hungry: 63.332,
      insomnia: 100,
      pain: 47.23323
    },
    con: {
      dryEyes: 100,
      dryMouth: 96.32423,
      headaches: 79.54646764,
      paranoid: 68.3543645,
      hungry: 63.534242
    },
    pointCounter: 0
  }
];
let questions = [
  {
    question: "What kind of high do you prefer?",
    choice0: "energetic & talkative",
    choice1: "Calm & Relaxing",
    choice2: "a heathy mix of the choice 1 and 2",
    choice3: "Therapeutic sort of high",
    answer: 1,
    tags: ["hungry", "happy", "pain", "relaxed"],
    type: "yellow"
  },
  {
    question: "Do ypu have issues with sleep?",
    choice0: "Often",
    choice1: "Sometimes",
    choice2: "Not Often",
    choice3: "Never",
    answer: 3,
    tags: ["hungry", "happy", "pain", "relaxed"],
    type: "red"
  },
  {
    question: " When do you usually smoke your first bowl?",
    choice0: "Daytime",
    choice1: "Evening",
    choice2: "No Preference",
    choice3: "When Im in pain",
    answer: 4,
    tags: ["hungry", "happy", "pain", "relaxed"],
    type: "green"
  }
];

const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  availableQuesions = [...questions];
  availableStrains = [...strains];

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
  // console.log(availableQuesions);
  acceptingAnswers = true;

  // Change the style of the question page based on the question type

  if (currentQuestion.type == "yellow") {
    const allChoice = document.getElementsByClassName("choice-prefix");
    const allChoiceCont = document.getElementsByClassName("choice-container");
    bodyTag[0].style.backgroundImage = 'url("img/general.svg")';
    bodyTag[0].style.backgroundRepeat = "no-repeat";
    bodyTag[0].style.backgroundPosition = "right bottom";
    for (let i = 0; i < allChoice.length; i++) {
      allChoice[i].style.backgroundColor = "#FFD700";
      allChoiceCont[i].style.border = "0.1rem solid rgba(255, 217, 0, 0.25)";
    }
  }
  if (currentQuestion.type == "red") {
    var allChoice = document.getElementsByClassName("choice-prefix");
    var allChoiceCont = document.getElementsByClassName("choice-container");
    bodyTag[0].style.backgroundImage = 'url("img/sideeffects.svg")';
    bodyTag[0].style.backgroundRepeat = "no-repeat";
    bodyTag[0].style.backgroundPosition = "right bottom";

    for (let i = 0; i < allChoice.length; i++) {
      allChoice[i].style.backgroundColor = "#FF4845";
      allChoiceCont[i].style.border = "0.1rem solid rgba(255, 72, 69, 0.25)";
    }
  }
  if (currentQuestion.type == "green") {
    var allChoice = document.getElementsByClassName("choice-prefix");
    var allChoiceCont = document.getElementsByClassName("choice-container");
    bodyTag[0].style.backgroundImage = 'url("img/health.svg")';
    bodyTag[0].style.backgroundRepeat = "no-repeat";
    bodyTag[0].style.backgroundPosition = "right bottom";
    for (let i = 0; i < allChoice.length; i++) {
      allChoice[i].style.backgroundColor = "#5CDB95";

      allChoiceCont[i].style.border = "0.1rem solid rgba(92, 219, 149, 0.25)";
    }
  }
};
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const rankingObject = {};
    getNewQuestion();

    function userTagChoice() {
      for (let i = 0; i < currentQuestion.tags.length; i++) {
        if (selectedAnswer == i) {
          const tagChoice = currentQuestion.tags[i];
          const currentStrain = availableStrains[i];
          const currentPro = currentStrain.pro;
          // HEY JIM, this LINE it says pro is undefined even though it is in my object in line 23 and 46

          console.log(currentStrain.pro);

          for (let i = 0; i < availableStrains.length; i++) {
            for (effect in currentPro) {
              if (tagChoice == effect) {
                rankingObject[currentPro[effect]] = Object.values(
                  currentPro[effect]
                );
                console.log(rankingObject);
              }
            }
          }
          return tagChoice;
        }
      }
    }

    const tagChoicer = userTagChoice();
    console.log(tagChoicer);

    console.log(selectedAnswer);
  });
});

// Create a foreach loop that stores each choices
const userChoice = [...choices];
// Correlate each choice with a tag

// Write a function that ranks the strains score for that tag

// Give the appropriate strain the score it deserves

// Get the highest scoring strain and store its id in a local storage

// Result Page
// Get the highest scoring strain from local storage

// Present the strain, its description, it's highest pros and "Where to buy" links in an HTML Page
startGame();
