// STRETCH GOALS: 
// -USE KEYPRESS INSTEAD OF A BUTTON AND/OR HIDE THE RUMBLE BUTTON ON USER CLICK
// -CLEAR INPUT BOXES ON CLICK OR KEYPRESS
// -CHOOSE A BACKGROUND IMG 
// -ADD A CAROUSEL FOR THE AWARDS WITH DIRECTION ARROWS

const playerData = [];

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

// DISPLAY THE WINNERS AWARD ICONS
const buildAchievementsDomString = (winner) => {
    let winnerName = `<h2>${winner.name} wins!</h4>`;
    printToDom(winnerName, 'winner');
    let achievements = '';
    for (let i = 0; i < winner.badges.length; i++) { 
        achievements += `<div class="col-sm-3">`;
        achievements +=     `<div class="badge-panel">`;
        achievements +=         `<div class="awards-section">`;
        achievements +=             `<h4 class="award-name">${winner.badges[i].name}</h4>`;
        achievements +=             `<img class="award-icon center" src="${winner.badges[i].icon_url}">`;
        achievements +=         `</div>`;
        achievements +=     `</div>`;
        achievements +=  `</div>`;
    };
    printToDom(achievements, 'achievements');
};

// EVALUATE PLAYER SCORES AND DECLARE WINNER
const evaluatePlayers = (playerData) => {
    let comp1Points = document.getElementById('comp-one-points').innerHTML;
    let comp1Parsed = parseInt(comp1Points);
    let comp2Points = document.getElementById('comp-two-points').innerHTML;
    let comp2Parsed = parseInt(comp2Points);
    let winner;
    if (comp1Parsed > comp2Parsed) {
       winner = playerData[1];
    } else {
        winner = playerData[0];
    }
    buildAchievementsDomString(winner);
};

// BUILD PLAYER CARDS
const buildPlayerOne = (playerData) => {
    if (playerData[1]) {
        let domString = "";
    domString += `<div id="comp-one" class="col-sm-6">`;
    domString +=    `<div class="panel">`;
    domString +=        `<div class="competitors">`;
    domString +=            `<h2 id="comp-one-name" class="panel-title">${playerData[1].profile_name}</h2>`;
    domString +=            `<img class="avatar" src="${playerData[1].gravatar_url}" alt="profile-pic">`;
    domString +=            `<h3>Total Points: <span id="comp-one-points">${playerData[1]['points'].total}</span></h3>`;
    domString +=        `</div>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, "display-one");
    }
};

const buildPlayerTwo = (playerData) => {
    let domString = "";
    domString += `<div id="comp-two" class="col-sm-6">`;
    domString +=    `<div class="panel">`;
    domString +=        `<div class="competitors">`;
    domString +=            `<h2 id="comp-two-name"class="panel-title">${playerData[0].profile_name}</h2>`;
    domString +=            `<img class="avatar" src="${playerData[0].gravatar_url}" alt="profile-pic">`;
    domString +=            `<h3>Total Points: <span id="comp-two-points">${playerData[0]['points'].total}</span></h3>`;
    domString +=        `</div>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, "display-two");
};

// XHR CALLS
function executeThisCodeIfXHRFails() {
    console.log("Oops! Something went wrong");
}

function executeOnLoad() {
    playerData.push(JSON.parse(this.responseText));
    buildPlayerOne(playerData);
    buildPlayerTwo(playerData);
    if (playerData.length === 2) {
        evaluatePlayers(playerData);
    };
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

const loadPlayers = () => {
    readyPlayerOne(executeOnLoad);
    readyPlayerTwo(executeOnLoad);
};

// EVENT LISTENERS 
const addEventListeners = () => {
    const goButton = document.getElementById('go');
    goButton.addEventListener('click', loadPlayers); 
};

// INITIALIZE APPLICATION
const startApplication = () => {
    addEventListeners();
};

startApplication();
