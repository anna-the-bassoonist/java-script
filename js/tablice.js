//jak podajemy index to podajemy ilosc elementow -1

//tablice:
let zmienna = ['Krystian', 'Ania', 'Adam'];

//wyciaganie elementu tablicy poprzez podanie numeru indeksu w nawiasie kwadratowym
console.log(zmienna[1]);


//Dodawanie wartosci na koniec tablicy
zmienna[3] = 'Marcin';
console.log(zmienna); /*/w konsoli pojawila sie cala tablica*/


zmienna.push('Michal');
console.log(zmienna);

//dodawanie wartosci na poczatek tablicy
zmienna.unshift('Monika');
console.log(zmienna);

//usuwanie elementow
//metoda pop() usuwa element zawsze z konca tablicy
zmienna.pop();
console.log(zmienna);

//metoda shift() usuwa zawsze pierwszy element z tablicy
zmienna.shift();
console.log(zmienna);

//sprawdzenie dlugosci  tablicy - .length
console.log(zmienna.length);

//join() zwraca wszystkie elementy wypisane jako tekst, w nawiasach opcjonalnie mozemy podac separator, domyslnie',' 
//console.log(zmienna.join(' '));


//reverse() odwraca tablice - niezaleznie od tego, gdzie zostal wykonany
console.log(zmienna.reverse());
console.log(zmienna);


//sort() sortuje tablice - niezaleznie od tego, gdzie zostal wykonany
console.log(zmienna.sort());
console.log(zmienna);
