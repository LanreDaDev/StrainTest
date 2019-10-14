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
const strainHeader = document.querySelector("h1");
const strainDesc = document.querySelector("#strainDesc");
const generalEffects = document.querySelector("#generalEffects p");
const medicalEffects = document.querySelector("#medicalEffects p");
const sideEffects = document.querySelector("#sideEffects p");

const key = "xaizI2o";
const url = "strainapi.evanbusse.com/";
console.log(strainHeader);

resultStrains = [...perfectStrains];
resultStrains.forEach(function(e) {
  let name = e.name;
  console.log(name);
  let URL = search_ByName(url, key, name);

  ajaxRequest(URL);

  // console.log(resultStrains[0].name);

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
        for (let i = 0; i < data.length; i++) {
          if (e.name === data[i].name) {
            // console.log(data[i].id);
            let id = data[i].id;
            let URLEffects = search_ByStrainEffect(url, key, id);
            let URLFlavors = search_ByStrainFlavor(url, key, id);
            strainHeader.innerHTML = data[i].name;
            strainDesc.innerHTML = data[i].desc;

            ajaxRequestEffects(URLEffects);
            ajaxRequestFlavour(URLFlavors);
            console.log(data);
          }
        }

        // display_Data(data);
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

        // display_Data(data);
      }
    };

    xhr.send();
  }

  function ajaxRequestFlavour(URL) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://" + URL, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let res = xhr.response;
        let data = JSON.parse(res);
        generalEffects.innerHTML = data[0];
        medicalEffects.innerHTML = data[1];
        sideEffects.innerHTML = data[2];

        console.log(data);

        // display_Data(data);
      }
    };

    xhr.send();
  }
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
