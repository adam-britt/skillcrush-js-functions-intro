function startMyDay() {
    return "Time for coffee and a shower!";
}
console.log(startMyDay());

function favoriteCookie(cookie) {
    return `My favorite cookie is ${cookie}.`;
}
console.log(favoriteCookie("chocolate chip"));

function introduce(name, occupation) {
    return `My name is ${name} and I work as a ${occupation}.`;
}
console.log(introduce("Adam", "Software Developer"));

function hydrationFeedback() {
    var numGlasses = Number(prompt("How many glasses of water did you drink today?"));
    if(numGlasses >= 8) {
        console.log("Congratulations, you've had 8+ glasses of water - excellent job!");
    } else {
        console.log("Not bad, not bad. Let’s try for a bit more wawa tomorrow!");
    }
}
hydrationFeedback();