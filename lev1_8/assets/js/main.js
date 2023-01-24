/* Aufgabenstellung

Verwende den Befehl toLowerCase(), toUpperCase(), um die gewünschten Zeichenketten zu erhalten.

const text = “Sam is going to codingschool”;

Erzeuge mit den Methoden "toLowerCase-toUpperCase" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast.

SAM IS GOING TO SCHOOL
sam is going at school 
SAM is going to SCHOOL
sam IS GOING TO school
Sam Is Going To School

Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.
myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.
 */

const text = "Sam is going to codingschool";
// SAM IS GOING TO SCHOOL

const allUppercase = text.toUpperCase();

// sam is going at school

const allLowercase = text.toLowerCase();
// SAM is going to SCHOOL

const fnameUp = allUppercase.slice(0, 3);
const placeUp = allUppercase.slice(15);
const verbLow = allLowercase.slice(3, 15);
const newSentence = fnameUp + " " + verbLow + " " + placeUp;

// sam IS GOING TO school

const fnameLow = fnameUp.toLowerCase();
const placeLow = placeUp.toLowerCase();
const verbUp = verbLow.toUpperCase();
const newSentenceTwo = fnameLow + " " + verbUp + " " + placeLow;

//Sam Is Going To School

let secondWord = text.slice(4, 6);
let thirdWord = text.slice(7, 12);
let forthWord = text.slice(13, 15);
let fifthWord = text.slice(16);

secondWord = secondWord.replace(
	secondWord.charAt(0),
	secondWord.charAt(0).toUpperCase()
);
thirdWord = thirdWord.replace(
	thirdWord.charAt(0),
	thirdWord.charAt(0).toUpperCase()
);
forthWord = forthWord.replace(
	forthWord.charAt(0),
	forthWord.charAt(0).toUpperCase()
);
fifthWord = fifthWord.replace(
	fifthWord.charAt(0),
	fifthWord.charAt(0).toUpperCase()
);

const newSentenceThree = text.replace(
	"is going to codingschool",
	secondWord + " " + thirdWord + " " + forthWord + " " + fifthWord
);

document.write(
	allUppercase +
		"<br>" +
		allLowercase +
		"<br>" +
		newSentence +
		"<br>" +
		newSentenceTwo +
		"<br>" +
		newSentenceThree
);
