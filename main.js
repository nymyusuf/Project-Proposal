


let spinButton = document.getElementById("spinButton");
let wheelResult = document.getElementById("wheelResult");

if (spinButton) {
    spinButton.onclick = function () {
        let adventures = ["City Nights", "Hiking Days", "Roadtrips", "Beach Days"];
        let randomAdventure = adventures[Math.floor(Math.random() * adventures.length)];

        wheelResult.textContent = "Your adventure is: " + randomAdventure + "!";
        wheelResult.style.color = "#f5586c";
        wheelResult.style.fontSize = "1.5rem";
    };
}




function setVibe(buttonId, message, bgColor) {
    let btn = document.getElementById(buttonId);
    let vibeMessage = document.getElementById("vibeMessage");

    if (btn) {
        btn.onclick = function () {
            vibeMessage.textContent = message;
            vibeMessage.style.backgroundColor = bgColor;
            vibeMessage.style.color = "white";
        };
    }
}

setVibe("neonBtn", "Neon Lights Mode!", "#ff00ff");
setVibe("jazzBtn", "Jazz Night Mode!", "#d4af37");
setVibe("rooftopBtn", "Rooftop View Mode!", "#2c5364");




let findGearBtn = document.getElementById("findGearBtn");
let gearResult = document.getElementById("gearResult");

if (findGearBtn) {
    findGearBtn.onclick = function () {
        let gear = ["Backpack", "Water Bottle", "Map", "Flashlight", "Compass"];
        let found = gear[Math.floor(Math.random() * gear.length)];

        gearResult.textContent = "You found: " + found + "!";
        gearResult.style.backgroundColor = "#a8edea";
        gearResult.style.color = "#2c3e50";
    };
}


let gasForm = document.getElementById("gasCostForm");
let gasResult = document.getElementById("gasResult");

if (gasForm) {
    gasForm.onsubmit = function (event) {
        event.preventDefault();

        let distance = +document.getElementById("distance").value;
        let mpg = +document.getElementById("mpg").value;
        let price = +document.getElementById("gasPrice").value;

        let total = (distance / mpg) * price;

        gasResult.textContent = "Total Gas Cost: $" + total.toFixed(2);
        gasResult.style.color = "#4caf50";
        gasResult.style.fontSize = "1.5rem";
        gasResult.style.display = "block";
    };
}


let applyThemeBtn = document.getElementById("applyTheme");
let beachTheme = document.getElementById("beachTheme");
let beachMessage = document.getElementById("beachMessage");

if (applyThemeBtn) {
    applyThemeBtn.onclick = function () {
        let theme = beachTheme.value;

        let themes = {
            tropical: ["Tropical Paradise Mode!", "#00d2ff"],
            sunset: ["Golden Sunset Mode!", "#ff7e5f"],
            ocean: ["Deep Ocean Blue Mode!", "#0052d4"],
            sunrise: ["Early Morning Sunrise!", "#ffecd2"]
        };

        if (themes[theme]) {
            beachMessage.textContent = themes[theme][0];
            beachMessage.style.backgroundColor = themes[theme][1];
        } else {
            beachMessage.textContent = "Please select a theme!";
            beachMessage.style.backgroundColor = "#fff3cd";
        }

        beachMessage.style.color = "white";
    };
}


let questForm = document.getElementById("addQuestForm");
let questConfirmation = document.getElementById("questConfirmation");

if (questForm) {
    questForm.onsubmit = function (event) {
        event.preventDefault();

        let questName = document.getElementById("questName").value;
        let questType = document.getElementById("questType").value;

        questConfirmation.textContent = "Quest Added: " + questName + " (" + questType + ")";
        questConfirmation.style.backgroundColor = "#d4edda";
        questConfirmation.style.color = "#155724";
    };
}



let checkboxes = document.querySelectorAll(".quest-item input[type='checkbox']");
let completedCount = document.getElementById("completedCount");
let activeCount = document.getElementById("activeCount");
let pointsCount = document.getElementById("pointsCount");

checkboxes.forEach(function (box) {
    box.onchange = function () {
        let completed = 0;

        checkboxes.forEach(function (cb) {
            if (cb.checked) completed++;
        });

        let active = checkboxes.length - completed;

        if (completedCount) completedCount.textContent = completed;
        if (activeCount) activeCount.textContent = active;
        if (pointsCount) pointsCount.textContent = completed * 100;
    };
});
