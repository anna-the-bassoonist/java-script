'use strict';

let sekcjaJeden = document.getElementById("parFirst");

//tworzymy obiekt
let btnKliknijMnie = document.createElement("button");
//tworzymy tekst- jeszcze do niczego nie przypisany
let txtKliknijMnie = document.createTextNode("Kliknij Button");

//tworzymy atrybut klasy
let classKliknijMnie = document.createAttribute("class");
//przypisujemy do niego nazwe
classKliknijMnie.value = "przycisk";

//tworzymy id i od razu przypisujemy do niego nazwe
btnKliknijMnie.setAttribute("id", "main-button");

//przypisujemy teraz do buttona tekst, ktory stworzylismy, 
btnKliknijMnie.appendChild(txtKliknijMnie);
btnKliknijMnie.setAttributeNode(classKliknijMnie);
//wstawilismy button do htmla przed sekcjaJeden, indeks=5
sekcjaJeden.insertBefore(btnKliknijMnie,sekcjaJeden.childNodes[5]);

console.log(sekcjaJeden.childNodes[5]);
//
//console.log(txtKliknijMnie);
//console.log(classKliknijMnie);

//children - pokazuje tylko znaczniki ktore sa w srodku
//cosole.log(sekcjaJeden.children);
////childNodes - pokazuje wszystko, rowniez tekstw tym wypadku puste miejsca pomiedzy znacznikami
//console.log(sekcjaJeden.childNodes);