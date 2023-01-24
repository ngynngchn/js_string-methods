/* JS Einführung
CodeFlow Übung lev1_2: indexOf 

Aufgabenstellung

Verwende den Befehl indexOf(), um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.

const txt = ”How inappropriate to call this planet Earth, when clearly it is Ocean.”

Suche die Position des Zeichens “h” in der Variablen txt.
Suche die Position des Zeichens “Earth” in der Variablen txt.
Suche die Position des Zeichens “Moon” in der Variablen txt.

1 */

const txt =
	"How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h")); // 27
console.log(txt.indexOf("Earth")); //38
console.log(txt.indexOf("Moon")); //-1

