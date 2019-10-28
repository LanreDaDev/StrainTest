// Store the question id in a const
const question = document.getElementById("question");

const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');

const progressBarFull = document.getElementById("progressBarFull");

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
    pointCounter: 0,
    link: "https://bud365.ca/product/gods-green-crack-2/?ref=Stingre"
  },

  {
    name: "Pre-98 Bubba Kush",
    pointCounter: 0,
    link: "https://bud365.ca/product/pre-98-bubba-2/?ref=Stingre"
  },
  {
    name: "Platinum OG",
    pointCounter: 0,
    link: "https://bud365.ca/product/platinum-og/?ref=Stingre"
  },
  {
    name: "Romulan",
    pointCounter: 0,
    link: "https://bud365.ca/product/romulan/?ref=Stingre"
  },
  {
    name: "MK Ultra",
    pointCounter: 0,
    link: "https://bud365.ca/product/mk-ultra-3/?ref=Stingre"
  },
  {
    name: "Super Sour Diesel",
    pointCounter: 0,
    link: "https://www.speedgreens.ca/product/super-sour-diesel-smalls-aaa/?ref=stingring7"
  },
  {
    name: "Alien OG",
    pointCounter: 0,
    link: "https://www.speedgreens.ca/product/alien-og-aaaa/?ref=stingring7"
  },
  {
    name: "Ice Wreck",
    pointCounter: 0,
    link: "https://www.speedgreens.ca/product/ice-wreck-aaa/"
  },
  {
    name: "Nuken",
    pointCounter: 0,
    link: "https://www.speedgreens.ca/product/nuken-aaa/?ref=stingring7"
  },
  // {
  //   name: "Scooby Snacks",
  //   pointCounter: 0,
  //   link: ""
  // },
  // {
  //   name: "Tuna Kush",
  //   pointCounter: 0
  // },
  // {
  //   name: "Wedding Cake",
  //   pointCounter: 0
  // },
  // {
  //   name: "Pine Tar Kush",
  //   pointCounter: 0
  // },
  // {
  //   name: "Violator Kush",
  //   pointCounter: 0
  // },
  // {
  //   name: "Black Diamond",
  //   pointCounter: 0
  // },
  // {
  //   name: "Bruce Banner",
  //   pointCounter: 0
  // },
  // {
  //   name: "Nebula",
  //   pointCounter: 0
  // },
  {
    name: "Astroboy",
    pointCounter: 0,
    link: "https://peak420.ca/product/astroboy/?ref=Stingre"
  },
  {
    name: "Gelato",
    pointCounter: 0,
    link: "https://peak420.ca/product/gelato-2/?ref=Stingre"
  },
  {
    name: "Purple Kush",
    pointCounter: 0,
    link: "https://peak420.ca/product/purple-kush-3/?ref=Stingre"
  },
  {
    name: "Rockstar",
    pointCounter: 0,
    link: "https://peak420.ca/product/rockstar-3/?ref=Stingre"
  },
  {
    name: "Moby Dick",
    pointCounter: 0,
    link: "https://peak420.ca/product/moby-dick-2/?ref=Stingre"
  },
  {
    name: "El Jefe",
    pointCounter: 0,
    link: "https://peak420.ca/product/el-jefe/?ref=Stingre"
  },
  {
    name: "Chocolate OG",
    pointCounter: 0,
    link: "https://buymyweedonline.ca/product/chocolate-og-aaaaa/ref/Stingre/"
  },
  {
    name: "Kushberry",
    pointCounter: 0,
    link: "https://buymyweedonline.ca/product/kushberry-aaa/ref/Stingre/"
  },
  {
    name: "Black Widow",
    pointCounter: 0,
    link: "https://www.greensociety.ca/product/black-widow-by-mr-nice-seeds/?ref=Stingre"
  },
  // {
  //   name: "Casey Jones",
  //   pointCounter: 0
  // },
  {
    name: "Crystal Coma",
    pointCounter: 0,
    link: "https://www.greensociety.ca/product/crystal-coma-by-elephantos/?ref=Stingre"
  },
  {
    name: "Bubba OG",
    pointCounter: 0,
    link: "https://www.greensociety.ca/product/bubba-og-by-norstar/?ref=Stingre"
  },
  {
    name: "Northern Lights",
    pointCounter: 0,
    link: "https://www.greensociety.ca/product/northern-lights-sampler/?ref=Stingre"
  },
  {
    name: "Jack the Ripper",
    pointCounter: 0,
    link: "https://www.greensociety.ca/product/jack-the-ripper-by-tga-subcool/"
  },
  // {
  //   name: "Alaskan Thunder Fuck",
  //   pointCounter: 0
  // },
  {
    name: "Angel OG",
    pointCounter: 0,
    link: "https://weedsmart.ca/product/angel-og/?ref=Stingre"
  },
  {
    name: "Black Bubba",
    pointCounter: 0,
    link: "https://weedsmart.ca/product/black-bubba-aaaa-in/?ref=Stingre"
  },
  {
    name: "Animal Cookies",
    pointCounter: 0,
    link: "https://weedsmart.ca/product/animal-cookies-aaaaa-hy/?ref=Stingre"
  },
  {
    name: "Black Tuna",
    pointCounter: 0,
    link: "https://weedsmart.ca/product/black-tuna/?ref=Stingre"
  },
  {
    name: "Alice in Wonderland",
    pointCounter: 0,
    link: "https://weedsmart.ca/product/alice-in-wonderland/?ref=Stingre"
  },
  {
    name: "Hawaiian Punch",
    pointCounter: 0,
    link: "https://weedsmart.ca/product/orange-cookies/?ref=Stingr"
  },
  {
    name: "Lemon Cake",
    pointCounter: 0,
    link: "https://www.westcoastsupply.ca/product/lemon-cake/?ref=54"
  },
  {
    name: "King Kong",
    pointCounter: 0,
    link: "https://www.westcoastsupply.ca/product/king-kong/"
  },
  {
    name: "Atomic Northern Lights",
    pointCounter: 0,
    link: "https://www.westcoastsupply.ca/product/king-kong/?ref=54"
  },
  {
    name: "Fire OG",
    pointCounter: 0,
    link: "https://www.westcoastsupply.ca/product/fire-og/?ref=54"
  },
  {
    name: "Larry OG",
    pointCounter: 0,
    link: "https://www.westcoastsupply.ca/product/larry-og/?ref=54"
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
  },
  {
    question: "Pick a flavor you would like?",
    choice0: "Ammonia",
    choice1: "Berry",
    choice2: "Cheese",
    choice3: "Woody",
    tags: ["ammonia", "berry", "cheese", "woody"],
    type: "blue"
  },
  {
    question: "Pick a flavor you would like?",
    choice0: "Citrus",
    choice1: "Coffee",
    choice2: "Diesel",
    choice3: "Earthy",
    tags: ["citrus", "coffee", "diesel", "earthy"],
    type: "blue"
  },
  {
    question: "Pick a flavor you would like?",
    choice0: "Flowery",
    choice1: "Grape",
    choice2: "GrapeFruit",
    choice3: "Honey",
    tags: ["flowery", "grape", "grapeFruit", "honey"],
    type: "blue"
  },
  {
    question: "Pick a flavor you would like?",
    choice0: "Lemon",
    choice1: "Menthol",
    choice2: "Pine",
    choice3: "Pungent",
    tags: ["lemon", "menthol", "pine", "pungent"],
    type: "blue"
  },
  {
    question: "Pick a flavor you would like?",
    choice0: "Skunk",
    choice1: "Spicy/Herbal",
    choice2: "Sweet",
    choice3: "Tropical",
    tags: ["skunk", "spicy/herbal", "sweet", "tropical"],
    type: "blue"
  }
];

const MAX_QUESTIONS = questions.length;

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

  
progressText.innerText = 'Question ' + questionCounter + "/" + MAX_QUESTIONS;
// Update the Progress Bar

progressBarFull.style.width = (questionCounter / MAX_QUESTIONS ) * 100 + '%';

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
    progressBarFull.style.backgroundColor = "#FFD700";
    progressBar.style.border = "0.3rem solid #FFD700"

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
    progressBarFull.style.backgroundColor = "#FF4845";
    progressBar.style.border = "0.3rem solid #FF4845"



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
    progressBarFull.style.backgroundColor = "#5CDB95";
    progressBar.style.border = "0.3rem solid #5CDB95"



    for (let i = 0; i < allChoice.length; i++) {
      allChoice[i].style.backgroundColor = "#5CDB95";

      allChoiceCont[i].style.border = "0.1rem solid rgba(92, 219, 149, 0.25)";
    }
  }
  if (currentQuestion.type == "blue") {
    var allChoice = document.getElementsByClassName("choice-prefix");
    var allChoiceCont = document.getElementsByClassName("choice-container");
    bodyTag[0].style.backgroundImage = 'url("img/flavor.svg")';
    bodyTag[0].style.backgroundSize = "20%";

    bodyTag[0].style.backgroundRepeat = "no-repeat";
    bodyTag[0].style.backgroundPosition = "right bottom";
    progressBarFull.style.backgroundColor = "#536dfe";
    progressBar.style.border = "0.3rem solid #536dfe"



    for (let i = 0; i < allChoice.length; i++) {
      allChoice[i].style.backgroundColor = "#536dfe";

      allChoiceCont[i].style.border = "0.1rem solid rgba(83, 109, 254, 0.25)";
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
