// console.log('oh hey, hi');
// hard code user profiles
// need an additional XHR Request to get the other competitor's data. call second request when the first request comes back successfully

const printToDom = (domString, divId) => {
    document.getElementById('divId').innerHTML = domString;
};

const buildPlayerOne = (playerOne) => {
    let domString = "";
    domString +=    `<div class="row">`;
    domString +=    `<div class="col-xs-6 col-md-3">`;
    domString +=    `<a href="${name}" class="thumbnail">`;
    domString +=    `<img src="${gravatar_url}" alt="profile-pic">`;
    domString +=    `</a>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, "display-one");
};

const buildPlayerTwo = (playerTwo) => {
    let domString = "";
    domString +=    `<div class="row">`;
    domString +=    `<div class="col-xs-6 col-md-3">`;
    domString +=    `<a href="${name}" class="thumbnail">`;
    domString +=    `<img src="${gravatar_url}" alt="profile-pic">`;
    domString +=    `</a>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, "display-two");
};

// when the user clicks the 'go' button, take the value and search treehouse
// 

  
// const contestantOne = document.getElementById('player-one');
// const contestantTwo = document.getElementById('player-two');
// Add Event listeners ..inside click event
// const userInputOne = document.getElementById('button').value; 
// const userInputTwo = document.getElementById('button').value;
const addEventListeners = () => {
    const goButtons = document.getElementsByClassName('btn');
    for (let i = 0; i < goButtons.length; i++) {
        goButtons[i].addEventListener('click', startApplication); 
    }
};
const playerOne = (input) => {
    var input = document.getElementById("input").value;
    console.log(input);
    var words = input.toLowerCase().split(' ');
}; 

function executeThisCodeIfXHRFails() {
    console.log("Oops! Something went wrong");
}

function executeThisCodeAfterFileLoads() {
    const data = JSON.parse(this.responseText);
    // replace .userOne with the appropriate variable 
    buildPlayerOne();
}
  
const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "https://teamtreehouse.com/nathanpabst.json");
};

