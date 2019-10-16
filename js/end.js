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
const generalEffects = document.querySelector("#generalEffects");
const medicalEffects = document.querySelector("#medicalEffects");
const sideEffects = document.querySelector("#sideEffects");
const strainRace = document.querySelector(".race");
const strainFlavor = document.querySelector("#flavors");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

var i = 0;
const key = "xaizI2o";
const url = "strainapi.evanbusse.com/";
console.log(strainHeader);

resultStrains = [...perfectStrains];

function prevItem() {
  if (i === 0) {
    // i would become 0
    i = resultStrains.length; // so put it at the other end of the array
  }
  i = i - 1; // decrease by one
  return resultStrains[i].name; // give us back the item of where we are now
}

function nextItem() {
  i = i + 1; // increase i by one
  i = i % resultStrains.length; // if we've gone too high, start from `0` again
  return resultStrains[i].name; // give us back the item of where we are now
}

window.addEventListener("load", () => {
  let name = resultStrains[0].name;
  let URL = search_ByName(url, key, name);
  console.log(resultStrains);

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
        console.log(data);

        // let identification = data[0].id;
        // let URLEffects = search_ByStrainEffect(url, key, identification);
        // ajaxRequest(URLEffects);

        for (let i = 0; i < data.length; i++) {
          if (name === data[i].name) {
            // console.log(data[i].id);
            let id = data[i].id;
            let URLEffects = search_ByStrainEffect(url, key, id);
            let URLFlavors = search_ByStrainFlavor(url, key, id);
            strainHeader.innerHTML = data[i].name;
            strainDesc.innerHTML = data[i].desc;
            strainRace.innerHTML = data[i].race;

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

        // Positive Effects

        var posEffectList = "<ul>";

        data.positive.forEach(function(effects) {
          posEffectList += "<li>" + effects + "</li>";
        });

        posEffectList += "</ul>";
        generalEffects.innerHTML = posEffectList;

        // Medical Effects

        var medEffectList = "<ul>";

        data.medical.forEach(function(effects) {
          medEffectList += "<li>" + effects + "</li>";
        });

        medEffectList += "</ul>";
        medicalEffects.innerHTML = medEffectList;

        // Negative Effects

        var negEffectList = "<ul>";

        data.negative.forEach(function(effects) {
          negEffectList += "<li>" + effects + "</li>";
        });

        negEffectList += "</ul>";
        sideEffects.innerHTML = negEffectList;
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
        // generalEffects.innerHTML = data[0];
        // medicalEffects.innerHTML = data[1];
        // sideEffects.innerHTML = data[2];

        console.log(data);
        var flavorList = "<ul>";

        data.forEach(function(effects) {
          flavorList += "<li>" + effects + "</li>";
        });

        flavorList += "</ul>";
        strainFlavor.innerHTML = flavorList;

        // display_Data(data);
      }
    };

    xhr.send();
  }

  // Previous Button

  prevBtn.addEventListener("click", () => {
    event.preventDefault();

    let name = prevItem();
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
          console.log(data);

          // let identification = data[0].id;
          // let URLEffects = search_ByStrainEffect(url, key, identification);
          // ajaxRequest(URLEffects);

          for (let i = 0; i < data.length; i++) {
            if (name === data[i].name) {
              // console.log(data[i].id);
              let id = data[i].id;
              let URLEffects = search_ByStrainEffect(url, key, id);
              let URLFlavors = search_ByStrainFlavor(url, key, id);
              strainHeader.innerHTML = data[i].name;
              strainDesc.innerHTML = data[i].desc;
              strainRace.innerHTML = data[i].race;

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

          // Positive Effects

          var posEffectList = "<ul>";

          data.positive.forEach(function(effects) {
            posEffectList += "<li>" + effects + "</li>";
          });

          posEffectList += "</ul>";
          generalEffects.innerHTML = posEffectList;

          // Medical Effects

          var medEffectList = "<ul>";

          data.medical.forEach(function(effects) {
            medEffectList += "<li>" + effects + "</li>";
          });

          medEffectList += "</ul>";
          medicalEffects.innerHTML = medEffectList;

          // Negative Effects

          var negEffectList = "<ul>";

          data.negative.forEach(function(effects) {
            negEffectList += "<li>" + effects + "</li>";
          });

          negEffectList += "</ul>";
          sideEffects.innerHTML = negEffectList;
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
          // generalEffects.innerHTML = data[0];
          // medicalEffects.innerHTML = data[1];
          // sideEffects.innerHTML = data[2];

          console.log(data);
          var flavorList = "<ul>";

          data.forEach(function(effects) {
            flavorList += "<li>" + effects + "</li>";
          });

          flavorList += "</ul>";
          strainFlavor.innerHTML = flavorList;

          // display_Data(data);
        }
      };

      xhr.send();
    }
  });
  nextBtn.addEventListener("click", event => {
    event.preventDefault();
    let name = nextItem();
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
          console.log(data);

          // let identification = data[0].id;
          // let URLEffects = search_ByStrainEffect(url, key, identification);
          // ajaxRequest(URLEffects);

          for (let i = 0; i < data.length; i++) {
            if (name === data[i].name) {
              // console.log(data[i].id);
              let id = data[i].id;
              let URLEffects = search_ByStrainEffect(url, key, id);
              let URLFlavors = search_ByStrainFlavor(url, key, id);
              strainHeader.innerHTML = data[i].name;
              strainDesc.innerHTML = data[i].desc;
              strainRace.innerHTML = data[i].race;

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

          // Positive Effects

          var posEffectList = "<ul>";

          data.positive.forEach(function(effects) {
            posEffectList += "<li>" + effects + "</li>";
          });

          posEffectList += "</ul>";
          generalEffects.innerHTML = posEffectList;

          // Medical Effects

          var medEffectList = "<ul>";

          data.medical.forEach(function(effects) {
            medEffectList += "<li>" + effects + "</li>";
          });

          medEffectList += "</ul>";
          medicalEffects.innerHTML = medEffectList;

          // Negative Effects

          var negEffectList = "<ul>";

          data.negative.forEach(function(effects) {
            negEffectList += "<li>" + effects + "</li>";
          });

          negEffectList += "</ul>";
          sideEffects.innerHTML = negEffectList;
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
          // generalEffects.innerHTML = data[0];
          // medicalEffects.innerHTML = data[1];
          // sideEffects.innerHTML = data[2];

          console.log(data);
          var flavorList = "<ul>";

          data.forEach(function(effects) {
            flavorList += "<li>" + effects + "</li>";
          });

          flavorList += "</ul>";
          strainFlavor.innerHTML = flavorList;

          // display_Data(data);
        }
      };

      xhr.send();
    }
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
