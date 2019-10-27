// Store the question id in a const
const question = document.getElementById("question");

// Store the choices id in a const
const choices = Array.from(document.getElementsByClassName("choice-text"));
const bodyTag = document.getElementsByTagName("body");
const key = "xaizI2o";
const url = "strainapi.evanbusse.com/";

// QUESTIONS

let questionCounter = 0;
let acceptingAnswers = false;
let availableQuesions = [];

// Strains

let strains = [
  {
    name: "God's Green Crack",
    pointCounter: 0
  },

  {
    name: "Pre-98 Bubba Kush",
    pointCounter: 0
  },
  {
    name: "Platinum OG",
    pointCounter: 0
  },
  {
    name: "Romulan",
    pointCounter: 0
  },
  {
    name: "MK Ultra",
    pointCounter: 0
  },
  {
    name: "Super Sour Diesel",
    pointCounter: 0
  },
  {
    name: "Alien OG",
    pointCounter: 0
  },
  {
    name: "Ice Wreck",
    pointCounter: 0
  },
  {
    name: "Nuken",
    pointCounter: 0
  },
  {
    name: "Scooby Snacks",
    pointCounter: 0
  },
  {
    name: "Tuna Kush",
    pointCounter: 0
  },
  {
    name: "Wedding Cake",
    pointCounter: 0
  },
  {
    name: "Pine Tar Kush",
    pointCounter: 0
  },
  {
    name: "Violator Kush",
    pointCounter: 0
  },
  {
    name: "Black Diamond",
    pointCounter: 0
  },
  {
    name: "Bruce Banner",
    pointCounter: 0
  },
  {
    name: "Nebula",
    pointCounter: 0
  },
  {
    name: "Astroboy",
    pointCounter: 0
  },
  {
    name: "Gelato",
    pointCounter: 0
  },
  {
    name: "Purple Kush",
    pointCounter: 0
  },
  {
    name: "Rockstar",
    pointCounter: 0
  },
  {
    name: "Moby Dick",
    pointCounter: 0
  },
  {
    name: "El Jefe",
    pointCounter: 0
  },
  {
    name: "Chocolate OG",
    pointCounter: 0
  },
  {
    name: "Kushberry",
    pointCounter: 0
  },
  {
    name: "Black Widow",
    pointCounter: 0
  },
  {
    name: "Casey Jones",
    pointCounter: 0
  },
  {
    name: "Crystal Coma",
    pointCounter: 0
  },
  {
    name: "Bubba OG",
    pointCounter: 0
  },
  {
    name: "Northern Lights",
    pointCounter: 0
  },
  {
    name: "Jack the Ripper",
    pointCounter: 0
  },
  {
    name: "Alaskan Thunder Fuck",
    pointCounter: 0
  },
  {
    name: "Angel OG",
    pointCounter: 0
  },
  {
    name: "Black Bubba",
    pointCounter: 0
  },
  {
    name: "Animal Cookies",
    pointCounter: 0
  },
  {
    name: "Black Tuna",
    pointCounter: 0
  },
  {
    name: "Alice in Wonderland",
    pointCounter: 0
  },
  {
    name: "Hawaiian Punch",
    pointCounter: 0
  },
  {
    name: "Lemon Cake",
    pointCounter: 0
  },
  {
    name: "King Kong",
    pointCounter: 0
  },
  {
    name: "Atomic Northern Lights",
    pointCounter: 0
  },
  {
    name: "Fire OG",
    pointCounter: 0
  },
  {
    name: "Larry OG",
    pointCounter: 0
  }
];
let questions = [
  {
    question: "Pick a positive effect you would like to experience?",
    choice0: "Creative",
    choice1: "Energetic",
    choice2: "Euphoric",
    choice3: "Focused",
    tags: ["creative", "energetic", "euphoric", "focused"],
    type: "yellow"
  },
  {
    question: "Pick a positive effect you would like to experience?",
    choice0: "Giggly",
    choice1: "Happy",
    choice2: "Hungry",
    choice3: "Relaxed",
    tags: ["giggly", "happy", "hungry", "relaxed"],
    type: "yellow"
  },
  {
    question: "Pick a positive effect you would like to experience?",
    choice0: "Sleepy",
    choice1: "Talkative",
    choice2: "Tingly",
    choice3: "Uplifted",
    tags: ["sleepy", "talkative", "tingly", "uplifted"],
    type: "yellow"
  },

  {
    question: "Pick a medical issues you need help with?",
    choice0: "Depression",
    choice1: "Eye Pressure",
    choice2: "Fatigue",
    choice3: "Headache",
    tags: ["depression", "eye pressure", "fatigue", "headache"],
    type: "green"
  },
  {
    question: "Pick a medical issues you need help with?",
    choice0: "Inflammation",
    choice1: "Insomnia",
    choice2: "Lack of Appetite",
    choice3: "Muscle Spasms",
    tags: ["inflammation", "insomnia", "lack of appetite", "muscle spasms"],
    type: "green"
  },
  {
    question: "Pick a medical issues you need help with?",
    choice0: "Nausea",
    choice1: "Pain",
    choice2: "Stress",
    choice3: "Spasticity",
    tags: ["Nausea", "Pain", "Stress", "Spasticity"],
    type: "green"
  },
  {
    question: "What side effect would you like to avoid?",
    choice0: "Anxious",
    choice1: "Dizzy",
    choice2: "Dry Eyes",
    choice3: "Dry Mouth",
    tags: ["anxious", "dizzy", "dry eyes", "dry mouth"],
    type: "red"
  },
  {
    question: "What side effect would you like to avoid?",
    choice0: "Paranoid",
    choice1: "Dry Eyes",
    choice2: "Dry Mouth",
    choice3: "Dizzy",
    tags: ["paranoid", "dry eyes", "dry mouth", "dizzy"],
    type: "red"
  }
];

const MAX_QUESTIONS = question.length;

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
    bodyTag[0].style.backgroundSize = "20%";
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
    bodyTag[0].style.backgroundSize = "20%";

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
    bodyTag[0].style.backgroundSize = "20%";

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
    getNewQuestion();

    // Get Strain Info Closure
    function getStrainInfo(strain, tagChoice) {
      let name = strain.name;

      let URL = search_ByName(url, key, name);

      ajaxRequest(URL);

      function ajaxRequest(URL) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://" + URL, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.response;
            let data = JSON.parse(res);

            for (let i = 0; i < data.length; i++) {
              if (name === data[i].name) {
                // console.log(data[i].id);
                let id = data[i].id;
                let URLEffects = search_ByStrainEffect(url, key, id);
                // let URLFlavors = search_ByStrainFlavor(url, key, id);

                ajaxRequestEffects(URLEffects);
                // ajaxRequestFlavour(URLFlavors);
                console.log(data);
              }
            }
          }
        };

        xhr.send();
      }
      function ajaxRequestEffects(URL) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://" + URL, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.response;
            let data = JSON.parse(res);
            console.log(data);

            data.positive.forEach(function(effects) {
              if (tagChoice === effects.toLowerCase()) {
                strain.pointCounter += 3;
                console.log("it matches");
              }
            });
            data.medical.forEach(function(effects) {
              if (tagChoice === effects.toLowerCase()) {
                strain.pointCounter += 3;
                console.log("it Medic matches");
                console.log(strain);
              }
            });
            data.negative.forEach(function(effects) {
              if (tagChoice === effects.toLowerCase()) {
                strain.pointCounter -= 3;
                console.log("it Negative matches");
                console.log(strain);
              }
            });
          }
        };

        xhr.send();
      }
    }

    function userTagChoice() {
      // Correlate each choice with a tag

      const tagChoice = currentQuestion.tags[selectedAnswer];

      availableStrains.forEach(strain => {
        // saves all strain that has the choosen effect and their value (The value will be used create points tier where your rank of attribute will determine the points --- See Readme )

        getStrainInfo(strain, tagChoice);
      });
    }

    userTagChoice();

    //   Tallying up the pointCounter

    let max = 0;
    availableStrains.forEach(strain => {
      if (strain.pointCounter >= max) {
        max = strain.pointCounter;
      }
    });

    // Creates an array of "Strain"objects

    const filteredItems = availableStrains.filter(strain => {
      return strain.pointCounter === max;
    });

    // Stores the strain and it is used int end.js or result page
    localStorage.setItem("perfectStrains", JSON.stringify(filteredItems));
  });
});

function search_ByName(url, key, name) {
  return url + key + "/strains/search/name/" + name.toLowerCase();
}
function search_ByStrainEffect(url, key, strainID) {
  return url + key + "/strains/data/effects/" + strainID;
}
function search_ByStrainFlavor(url, key, strainID) {
  return url + key + "/strains/data/flavors/" + strainID;
}

startGame();
