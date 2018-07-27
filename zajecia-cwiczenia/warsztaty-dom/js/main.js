'use strict';

function wyswietlDane(e) {
    e.preventDefault();
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;



        console.log(imie,nazwisko);
}

let formularz = document.getElementById("formularz");

formularz.addEventListener('submit', wyswietlDane);

//console.log(wyswietlDane);


//jak piszemy nazwe to pokazuje cialo funkcji/ console.log(napisz);

//jak piszemy console.log(napisz()) to wywolujemy funkcje

//wywolanie funkcji - musza byc nazwiasy
//()
