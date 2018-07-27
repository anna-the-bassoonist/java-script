'use strict';

//napisz funkcje ktora oblicza silnie n. Funkcja przyjmuje parametr n i zwraca wynik - silnia n(n!)

//rekurencja-wywolujemy funkcje w niej samej
//
//function silnia(n) {
//
//    let wynik = 1;
//
//    if (n < 0) {
//        return 'Silnia od liczby ujemnej nie istnieje';
//    } else if (n < 2) {
//        return wynik;
//    }
//
////obsluga silni
//    wynik = n * silnia(n-1);
//    return wynik;
//    
//
//}
//console.log(silnia(4));


function silniaPrzezPetle(n) {

    let wynik = 1;

    if (n < 0) {
        return 'Silnia od liczby ujemnej nie istnieje';
    } else if (n < 2) {
        return wynik;
    }

//obsluga silni
//    for(let i=1; i<=n; ++i){
//        wynik = wynik*i;
        for(n; n>0; --n){
        wynik = wynik*n;
    }
    
    return wynik;
}
console.log(silniaPrzezPetle(6));
