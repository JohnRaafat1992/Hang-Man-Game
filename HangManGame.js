// letters 
const letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters 
let lettersArray = Array.from(letters);

// select letters container
let lettersContainer = document.querySelector(".letters");

// generate letters 
lettersArray.forEach(letter => {

	// creat e span 
	let span = document.createElement("span");

	// create text to this span 
	let theLetter = document.createTextNode(letter);

	// add this text inside span 
	span.appendChild(theLetter);

	// add class name on span 
	span.className = 'letter-box';

	// add span to the letters container 
	lettersContainer.appendChild(span);

});

// object of words + categories 
const words = {
	Animals_Names: ["Squirrel", "Dog", "Chimpanzee", "Ox", "Lion", "Panda", "Parrot", "Rabbit", "Mouse", "Hamster", "Sheep", "Horse"],
	Famous_Movies: ["Bloodshot", "TheHunt", "TheShawshank", "TheGodfather", "TheDarkKnight", "AngryMen", "SchindlersList", "PulpFiction"],
	Famous_Persons: ["JeffBezos", "Billgates", "DwayneJohnson", "KylieJenner", "Ghandi", "RobertDowney", "CristianoRonaldo", "BarackObama", "JustinBieber",],
	countries: ["Egypt", "Belaruse", "Russia", "Palestine", "German", "Italy", "France", "Afghanistan", "Albania", "Algeria", "Andorra", "	Bolivia"]
}

// get random property

let allKeys = Object.keys(words);

// random number depends on words
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// category 
let randomPropName = allKeys[randomPropNumber];

// category Words
let randomPropValue = words[randomPropName];

// random number depends on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// the chosen word 
let randomValueValue = randomPropValue[randomValueNumber];

// set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// select letters guess element 
let letterGuessContainer = document.querySelector(".letters-guess");

// convert chosen word to array 
let lettersAndSpace = Array.from(randomValueValue);

// create spans depend on word
lettersAndSpace.forEach(letter => {

	// create empty span 
	let emptySpan = document.createElement("span");

	// if letter is space
	if (letter === ' ') {

		//add class to the span 
		emptySpan.className = 'with-span';

	}

	// add span to the letters guess container 
	letterGuessContainer.appendChild(emptySpan);

});

// select guess span 
let guessSpan = document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttempts = 0;

// set wrong attempts
let rightAttempts = 0;

// select the draw element
let theDraw = document.querySelector(".hangman-draw");

// handle clincking on letters 
document.addEventListener("click", (e) => {

// set the chose status
let theStatus = false;

if (e.target.className === 'letter-box') {

e.target.classList.add("clicked");

// get clicked letter 
let theClickedLetter = e.target.innerHTML.toLowerCase();

// chosen word
let theChosenWord = Array.from(randomValueValue.toLowerCase());

theChosenWord.forEach((wordLetter, wordIndex) => {

// if the clicked letters Equal one of the chosen word letters do this 
if (theClickedLetter == wordLetter) {

// set the status to correct
theStatus = true;

// increase the wrong attempts
rightAttempts++;

if (rightAttempts === randomValueValue.length) {

winGame();

// play success sound
document.getElementById("fireworks").play();
document.getElementById("success2").play();

	
};

// loop on all guess span 
guessSpan.forEach((span, spanIndix) => {

if (wordIndex === spanIndix) {

span.innerHTML = theClickedLetter;

}

})

}

});

// outside loop

// if letter is wrong 
if (theStatus !== true) {

// increase the wrong attempts
wrongAttempts++;

// add class wrong on the draw element 
theDraw.classList.add(`wrong-${wrongAttempts}`);

// play fail sound
document.getElementById("fail").play();

if (wrongAttempts === 8) {

endGame();

lettersContainer.classList.add("finished");

}

} else {

// play success sound
document.getElementById("success").play();


}

}
});

// end game function if lose 
function endGame() {

	// create popup div 
	let div = document.createElement("div");

	// create text to div
	let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue}`);

	// add text to div
	div.appendChild(divText);

	// add class on div 
	div.className = 'popup';

	// add this div to body
	document.body.appendChild(div);
};
// reset button 
document.querySelector(".btn-info").onclick = function () {
	window.location.reload();
};

// end game function if lose 
function winGame() {

	// create popup div 
	let WinDiv = document.getElementById("fire-works");

	// add class on div 
	WinDiv.className = 'pyro';

	// create text to div
	let WinText = document.createTextNode(` Congratulation , You Win `);

	// add text to div
	WinDiv.appendChild(WinText);


};
