// const username = document.getElementById("username");
// const saveScoreBtn = document.getElementById("saveScoreBtn");
// const finalScore = document.getElementById("finalScore");
// const mostRecentScore = localStorage.getItem("mostRecentScore");

// finalScore.innerText = mostRecentScore;

// username.addEventListener("keyup", () => {
//   saveScoreBtn.disabled = !username.value;
// });

// saveHighScore = e => {
//   console.log("clicked the save button!");
//   e.preventDefault();
// };
const perfectStrains = JSON.parse(localStorage.getItem("perfectStrains"));
const key = "xaizI2o";
const url = "strainapi.evanbusse.com/";
// console.log(perfectStrains);

resultStrains = [...perfectStrains];
resultStrains.forEach(function(e) {
  let name = e.name;
  console.log(name);
  let URL = search_ByName(url, key, name);

  ajaxRequest(URL);
});

// console.log(resultStrains[0].name);

let id = 5;
// let name = "Granddaddy Purple";

function ajaxRequest(URL) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://" + URL, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let res = xhr.response;
      let data = JSON.parse(res);
      // let identification = data[0].id;
      // let URLEffects = search_ByStrainEffect(url, key, identification);
      // ajaxRequest(URLEffects);
      console.log(data);

        // display_Data(data);
    }
  };

  xhr.send();
}

function search_ByName(url, key, name) {
  return url + key + "/strains/search/name/" + name.toLowerCase();
}

// startResults = () => {
//   strainCounter = 0;
//   resultStrains = [...perfectStrains];
//   const maxStrains = resultStrains.length;

//   resultStrains.foreach(function(e) {
//     console.log(e);
//   });
//   getResults();
// };

// getResults = () => {
//   if (resultStrains === 0 || strainCounter >= maxStrains) {
//   }
// };

// console.log(perfectStrains);
