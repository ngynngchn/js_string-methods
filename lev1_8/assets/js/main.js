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

const allUppercase = text.toUpperCase();
const allLowercase = text.toLowerCase();

const fnameUp = allUppercase.slice(0, 3);
const placeUp = allUppercase.slice(15);
const verbLow = allLowercase.slice(3, 15);
const newSentence = fnameUp + " " + verbLow + " " + placeUp;

const fnameLow = fnameUp.toLowerCase();
const placeLow = placeUp.toLowerCase();
const verbUp = verbLow.toUpperCase();
const newSentenceTwo = fnameLow + " " + verbUp + " " + placeLow;

document.write(
	allUppercase +
		"<br>" +
		allLowercase +
		"<br>" +
		newSentence +
		"<br>" +
		newSentenceTwo
);
