// console.log('oh hey, hi');

const printToDom = (domString, divId) => {
    document.getElementById('divId').innerHTML = domString;
};

const buildPlayerOne = (data) => {
    let domString = "";
    domString +=  `<div class="userOne">`;
    domString +=    `<h2>${data.profile_name}</h2>`;
    domString +=    `<img src="${data.gravatar_url}" alt="profile-pic">`;
    domString +=    `<h3>${data.points.total}`;
    domString +=  `</div>`;
    printToDom(domString, "display-one");
};

const buildPlayerTwo = (data) => {
    let domString = "";
    domString +=  `<div class="userTwo">`;
    domString +=    `<h2>${data.profile_name}</h2>`;
    domString +=    `<img src="${data.gravatar_url}" alt="profile-pic">`;
    domString +=    `<h3>${data.points.total}`;
    domString +=  `</div>`;
    printToDom(domString, "display-two");
};
// const evaluatePlayers = () => {

// };

// const addRumbleListener = () => {
//     const rumbleButton = document.getElementById('start-match');
//     rumbleButton.addEventListener('click', evaluatePlayers);
// };

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
    myRequest.open("GET", "https://teamtreehouse.com/" + playerOne + ".json");
}; 

const readyPlayerTwo = (successFunction) => {
    let playerTwo = document.getElementById('player-two').value;
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", successFunction);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "https://teamtreehouse.com/" + playerTwo + ".json");
}; 
 
const startApplication = () => {
    addEventListeners();
    // addRumbleListener();
};

startApplication();

