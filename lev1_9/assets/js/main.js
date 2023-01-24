/* Aufgabenstellung

Verwende die Methode concat(), um die gewünschten Zeichenketten zu erhalten.

const text1 = “Sam is going to codingschool”;
const text2 = “Susi”
const text3 = “programming bike”
const text4 = “and” 

Erzeuge mit "concat" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast.

Sam is going to school and to the movie theater
Sam is going to movie theater
Susi and Sam are going to school
Susi and Sam are going to gym and to the movie theater
Susi is going to school and to the movie theater

Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.

 */

const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

const sentence1 = text1.concat(" ", "to the movie theater");
// Sam is going to school and to the movie theater
const sentence2 = text1.replace("codingschool", "movie theater");
// Sam is going to movie theater
const sentence3 = text2.concat(" ", text4, " ", text1.replace("is", "are"));
// Susi and Sam are going to school
const sentence4 = sentence3.replace(
	"codingschool",
	"gym and to the movie theater"
);
// Susi and Sam are going to gym and to the movie theater
const sentence5 = text1
	.replace("Sam", "Susi")
	.concat(" ", text4, "to the movie theater");
// Susi is going to school and to the movie theater

document.write(
	sentence1 +
		"<br>" +
		sentence2 +
		"<br>" +
		sentence3 +
		"<br>" +
		sentence4 +
		"<br>" +
		sentence5
);
