/* Aufgabenstellung

Verwende den Befehl slice(), um das Ergebnis zu erhalten.

const A = 'Susi is going to codingschool';

Verwende die Methode "slice" um in deinem HTML folgendes angezeigt zu bekommen:
Susi
is
is going to school
school
Susi is school

Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis im Dokument auszugeben.
myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden. */

const a = "Susi is going to codingschool";

const fname = a.slice(0, 4);
console.log("fname: ", fname);

const preposition = a.slice(14, 16);
console.log("preposition: ", preposition);

const verb = a.slice(5, 7);
console.log("verb: ", verb);

const place = a.slice(23);
console.log("place: ", place);

const addVerb = a.slice(8, 14);
console.log("addVerb: ", addVerb);

document.write(
	fname +
		"<br>" +
		verb +
		"<br>" +
		verb +
		" " +
		addVerb +
		" " +
		preposition +
		" " +
		place +
		"<br>" +
		place +
		"<br>" +
		fname +
		" " +
		verb +
		" " +
		place
);
