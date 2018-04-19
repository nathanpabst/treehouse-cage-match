// console.log('oh hey, hi');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildPlayerOne = (data) => {
    let domString = "";
    domString += `<div id="comp-one" class="col-sm-6">`;
    domString += `<div class="panel">`;
    domString +=  `<div class="panel-heading">`;
    domString +=  `<div class="competitors">`;
    domString +=    `<h2 id="comp-one-name" class="panel-title">${data.profile_name}</h2>`;
    domString +=    `<img class="avatar" src="${data.gravatar_url}" alt="profile-pic">`;
    domString +=    `<h3>Total Points: <span id="comp-one-points">${data.points.total}</span></h3>`;
    domString +=  `</div>`;
    domString +=  `</div>`;
    domString +=  `</div>`;
    domString +=  `</div>`;
    printToDom(domString, "display-one");
};

const buildPlayerTwo = (data) => {
    let domString = "";
    domString += `<div class="col-sm-6">`;
    domString += `<div class="panel">`;
    domString +=  `<div class="panel-heading">`;
    domString +=  `<div class="competitors">`;
    domString +=    `<h2 id="comp-two-name"class="panel-title">${data.profile_name}</h2>`;
    domString +=    `<img class="avatar" src="${data.gravatar_url}" alt="profile-pic">`;
    domString +=    `<h3>Total Points: <span id="comp-two-points">${data.points.total}</span></h3>`;
    domString +=  `</div>`;
    domString +=  `</div>`;
    domString +=  `</div>`;
    domString +=  `</div>`;
    printToDom(domString, "display-two");
};

// const buildAwards = () => {
//     let domString = "";
//     domString += `<div class="panel panel-default">`;
//     domString +=   `<div class="panel-heading">`;
//     domString +=   `<h3 class="panel-title">Achievements</h3>`;
//     domString +=   `</div>`;
//     domString +=   `<div class="awards-section">`;
//     domString +=   `<..${data.icon_url}>`;
//     domString +=   `</div>`;
//     printToDom(domString, 'achievements');
// };

// const getAwards = () => {

// };

// EVALUATE PLAYER SCORES AND DECLARE WINNER
const evaluatePlayers = (e) => {
    let comp1Points = document.getElementById('comp-one-points').innerHTML;
    let comp1Parsed = parseInt(comp1Points);
    let comp2Points = document.getElementById('comp-two-points').innerHTML;
    let comp2Parsed = parseInt(comp2Points);
    if (comp1Parsed > comp2Parsed) {
        winner = document.getElementById('comp-one-name').innerHTML;
    } else {
        winner = document.getElementById('comp-two-name').innerHTML;
    }
    let domString = `<h4>${winner} wins!</h4>`;
    printToDom(domString, 'winner');
    // // getAwards();
};

const addRumbleListener = () => {
    const rumbleButton = document.getElementById('start-match');
    rumbleButton.addEventListener('click', evaluatePlayers);
};

// WHEN THE USER CLICKS THE 'GO' BUTTON, TAKE THE VALUES AND SEARCH TREEHOUSE 
const addEventListeners = () => {
    const goButton = document.getElementById('go');
    goButton.addEventListener('click', loadPlayers); 
};

function executeThisCodeIfXHRFails() {
    console.log("Oops! Something went wrong");
}

function executeOnLoad2() {
    const loadPlayerTwo = JSON.parse(this.responseText);
    buildPlayerTwo(loadPlayerTwo);
}

function executeOnLoad() {
    const loadPlayerOne = JSON.parse(this.responseText);
    buildPlayerOne(loadPlayerOne);
}

const loadPlayers = () => {
    readyPlayerOne(executeOnLoad);
    readyPlayerTwo(executeOnLoad2);
}

const readyPlayerOne = (successFunction) => {
    let playerOne = document.getElementById('player-one').value;
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", successFunction);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", `https://teamtreehouse.com/${playerOne}.json`);
    myRequest.send();
}; 

const readyPlayerTwo = (successFunction) => {
    let playerTwo = document.getElementById('player-two').value;
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", successFunction);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", `https://teamtreehouse.com/${playerTwo}.json`);
    myRequest.send();
}; 
 
const startApplication = () => {
    addEventListeners();
    addRumbleListener();
};

startApplication();
