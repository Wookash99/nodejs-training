
// zaimplementujmy tą samą funkcjonalność używając tylko literału obiektu i domknięć
// do stworzenia programisty używamy funkcji fabrykującej
// var programmer = createProgrammer();

// function Programmer () {
// 	this.languages = [];
// }

// Programmer.prototype.learnNewLanguage = function (language) {
// 	this.languages.push(language);
// }

// Programmer.prototype.isPragmatic = function () {
// 	return this.languages.length >= 3;
// }

function createProgrammer () {
	var languages = [];

	var learnNewLanguage = function (language) {
		languages.push(language);
	}

	var isPragmatic = function () {
		return languages.length >= 3;
	}

	return {
		learnNewLanguage: learnNewLanguage,
		isPragmatic: isPragmatic
	}
}


var langsToLearn = ['JS', 'Java', 'Clojure'];
var programmer = createProgrammer();

langsToLearn.forEach( function (element) {
	programmer.learnNewLanguage(element);
});

console.log(programmer.isPragmatic());