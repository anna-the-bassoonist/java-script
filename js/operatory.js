//operatory inkrementacji/dekrementacji
let zmienna  = 10;

console.log(zmienna); //10
console.log(++zmienna);//11-najpierw zwiekszy, potem wypisze wartosc
console.log(zmienna++);//11-najpierw wypisze, potem zwiekszy wartosc
console.log(zmienna);//12

//operatory przypisania
zmienna += 10;
//zmienna = zmienna + 10
console.log(zmienna);

//operatory porownania/
//if(2 == '2') {
if(2 === '2') {
    console.log("2 == '2");
}

//operatory logiczne
//&& - iloczyn ligiczny (i)
// || - suma logiczna (lub)
// ! - negacja( zamiana wartosci true => false,false => true)
if(!(2 === '2' && 3 == '3')) {
    console.log('negacja iloczynu logicznego')
}

let number = 100 ;
let wynik = (number < 0) ? -1: 1;
console.log(wynik);
//bedzie 1, bo 100 nie jest mniejsze od 0.


if(1>10) {
    console.log('1>10');
} else if (1==10)  {
    console.log('1=10');
} else {
    console.log('1<10');
}

//switch/
//uzywamy switch do gier, np do klawiszy,np co robia
//w switch obslugujemy konkretne przypadki
let kolor = 'czerwony';

switch(kolor) {
    case 'zielony':
        concole.log('podales kolor zielony');
        break;
        
    case 'niebieski':
        console.log('podales kolor niebieski');
        break;
        
    case 'zolty':
        console.log('podales kolor zolty');
        break;
        
    default:
        console.log('nie podales koloru z listy');
//    wyswietlilo sie: nie podales koloru z listy
}


let tablica = [10,100,35,43,104];



//przyklad wyswietlania tablicy od poczatku:
//for(let i = 0; i < tablica.length; i++ ){
//    console.log(tablica[i]);
//}
////w tym wypadku i ma wartosc od zera do 4
//
////przyklad wyswietlania tablicy od konca:
////od length musimy odjac jeden bo dlugosc tablicy ma 5elementow ale indeks = 4[0,1,2,3,4]. wiec inaczej bylby blad
//for(let i = tablica.length -1; i >= 0; i--){
//    console.log(tablica[i]);
//}


//zawsze najpierw element potem index!
tablica.forEach(function(element, index) {
    console.log('Index tablica:' + index + ',element tablicy:' + element);
})

//tworzymy obiekt:/
//petla for in - na obiektach, podajemy "key" (klucz) w obiekcie
let samochod = {
    marka: 'audi',
    kolor: 'bialy',
    pojemnosc: 5.2
}

for(let key in samochod) {
    console.log(samochod[key]); 
}
//przy for in uzywac zapisu klucza w klamrze-jest bezpieczniej

let liczba = 0;
//petla nieskonczona
//while(true) {
//console.log(liczba++);
//}

while(liczba<10) {
    console.log(liczba++);
}
//w konsoli wyswietlily sie liczby od 0 do 10

//for uzywac raczej niz while, 
//przy while raczej sprawdzamy warunki logiczne


//,,do while,, rozni sie od petli ,,while,, tym, ze wkona sie zawsze chociaz raz
let number2 = 0;
do {
    console.log(number++);
} while(number2>2);

let numbers = 0;
while(true) {
    console.log(numbers++);
    
    if(numbers == 10) {
        break;
    }
}

for(let i=1; i<=20; i++) {
    if(i % 2 !=0) {
        continue;
    }
    
    console.log( i + '');
}

//continue-w tym wypadku przeskakuje elementy, idzie do kolejnej funkcji/w konsoli beda pominiete liczby nieparzyste(beda liczby od 2,4,..,20)