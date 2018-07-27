'use strict';

function potega(parametr1,parametr2) {
    let wynik = 1;

    for (let i = 0; i<parametr2; i++) {
        wynik *= parametr1;
    }

    return wynik;
}

console.log(potega(2,3));