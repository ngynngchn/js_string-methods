/* Aufgabenstellung

Verwende den Befehl replace(), um die gewünschten Zeichenketten zu erhalten.

const text = “Sam is good at codingschool”;

Zeige mit der Methode "replace" diese Ausgabe in einem HTML-Dokument an:

Sam is bad at school
Susi is good at school 
Sam is good at tennis

Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.
myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.
 */

const text = "Sam is good at codingschool";

const badText = text.replace("good", "bad");
const fname = text.replace("Sam", "Susi");
const occupation = text.replace("codingschool", "tennis");

document.write(badText + "<br>" + fname + "<br>" + occupation);
