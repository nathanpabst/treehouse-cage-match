console.log('oh hey, hi');

const printToDom = (domString, divId) => {
    document.getElementById('divId').innerHTML = domString;
};


const displayPlayerOne = (playerOne) => {
    let domString = "";
    domString += `<div id="display-one">`;
    domString +=    `<div class="row">`;
    domString +=    `<div class="col-xs-6 col-md-3">`;
    domString +=    `<a href="${name}" class="thumbnail">`;
    domString +=    `<img src="${gravatar_url}" alt="profile-pic">`;
    domString +=    `</a>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, "display-one");
};

const buildPlayerOne = () => {
    let domString = "";
    domString += `<div id="build-one">`;
    domString +=    `<div class="col-lg-6">`;
    domString +=    `<div class="input-group">`;
    domString +=    `<input type="text" class="form-control" placeholder="Search for...">`;
    domString +=    `<span class="input-group-btn">`;
    domString +=    `<button class="btn btn-default" type="button">Go!</button>`;
    domString +=    `</span>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, "build-one");
    displayPlayerOne();
};
// can i make this a generic function that can build both cards?
 
const displayPlayerTwo = (playerTwo) => {
    let domString = "";
    domString += `<div id="user-two">`;
    domString +=    `<div class="row">`;
    domString +=    `<div class="col-xs-6 col-md-3">`;
    domString +=    `<a href="#" class="thumbnail">`;
    domString +=    `<img src="..." alt="...">`;
    domString +=    `</a>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, "playerTwo");
};
// can i make this a generic function that can build both cards?
const buildPlayerTwo = () => {
    let domString = "";
    domString += `<div id="build-two">`;
    domString +=    `<div class="col-lg-6">`;
    domString +=    `<div class="input-group">`;
    domString +=    `<input type="text" class="form-control" placeholder="Search for...">`;
    domString +=    `<span class="input-group-btn">`;
    domString +=    `<button class="btn btn-default" type="button">Go!</button>`;
    domString +=    `</span>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, "build-two");
    displayPlayerTwo();
};
// when the user clicks the 'go' button, take the value and search treehouse
const selectCompetitor = e => {
    selectedCompetitor = e.target.dataset.##;
    document.getElementById('go-button');
}
// Add Event listeners


function executeThisCodeIfXHRFails() {
    console.log("Oops! Something went wrong");
}

function executeThisCodeAfterFileLoads() {
    const data = JSON.parse(this.responseText);
    // replace .userOne with the appropriate variable 
    buildDomString(data.userOne);
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "https://teamtreehouse.com/nathanpabst.json");
};

startApplication();