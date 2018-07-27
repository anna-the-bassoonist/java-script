'use strict';

//napisz funkcje ktora zwraca liczbe do potegi trzeciej. Funkcja przyjmuje jeden parametr(liczbe podnoszona do potegi),a zwraca liczbe podniesiona do potegi 3//

function potega3(liczba){
    
    let wynik = 1;
    for( let i=0; i<3; i++){
        wynik = wynik * liczba; //wynik *= liczba;
        
    }
    return wynik;
}

let wynikPotegowania = potega3(2);
console.log(wynikPotegowania);
console.log(potega3(3));


