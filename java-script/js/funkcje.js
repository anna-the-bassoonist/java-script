//1.deklaracja funkcji:

//function wypiszDoKonsoli() {
//    console.log('123');

//w wywolaniu pustej funkcji koniecznie musi byc nawias na koncu bo ona inaczej sie nie wywola:
//wypiszDoKonsoli();



//2.wyrazenie funkcyjne
const wypiszDoKonsoli = function() {
    console.log('123');
}

wypiszDoKonsoli();

//3.funkcje parametrowe:
function dodawanie(parametr1, parametr2) {
    
    
//    console.log(paramatr1 + parametr2);


//dodawanie(1,2);
//jesli napisalibysmy dodawanie(1,'2'), wyszloby 12:bo 1 i 2, takze uwazac! tak jak byloby dodawanie(ala,'ma','kota'),wyszloby: alamakota.

//zwracanie wartosci - return , pozwalana wykorzystanie wartoosci w pozniejszym miejscu w skrypcie
return parametr1 + parametr2;
}

//jezeli chcemy zobaczyc wartosc zwrocona, to albo cala funkcje opinamy w console.log(),albo console.log() umieszczamy zaraz przed return we wnetrzu funkcji
//console.log(dodawanie(1,2));

//funkcje strzalkowe/
const dodawanie2 = (parametr1, parametr2) => {
    console.log(parametr1 + parametr2);
    return parametr1 + parametr2;
}

console.log(dodawanie(1,2));