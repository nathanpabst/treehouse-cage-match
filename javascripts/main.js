// console.log('oh hey, hi');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildPlayerOne = (data) => {
    let domString = "";
    domString += `<div class="col-sm-6">`;
    domString += `<div class="panel">`;
    domString +=  `<div class="panel-heading">`;
    domString +=  `<div class="competitors">`;
    domString +=    `<h2 class="panel-title">${data.profile_name}</h2>`;
    domString +=    `<img class="avatar" src="${data.gravatar_url}" alt="profile-pic">`;
    domString +=    `<h3>Total Points: ${data.points.total}</h3>`;
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
    domString +=    `<h2 class="panel-title">${data.profile_name}</h2>`;
    domString +=    `<img class="avatar" src="${data.gravatar_url}" alt="profile-pic">`;
    domString +=    `<h3>Total Points: ${data.points.total}</h3>`;
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

// evaluatePlayers is not working properly
const evaluatePlayers = (e) => {
    const competitors = document.getElementsByClassName('competitors');
    let totals = [];
    for (let i = 0; i < totals.length; i++) {
        let total = competitors[i].children[2].innerHTML;
        scores.push(total * 1);
    }
    let winner;
    if (totals[0] > totals[1]) {
        winner = competitors[0].children[0].innerHTML;
    } else {
        winner = competitors[1].children[0].innerHTML;
    }
    let domString = `<h4>${winner} wins!</h4>`;
    printToDom(domString, 'winner');
    // getAwards();
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
