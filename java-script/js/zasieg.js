//let odwoluje sie do bloku w ktorym sie znajduje, var odwoluje sie do calego pliku

//zmienna globalna dostepna jest z kazdego miesjca w skrypcie , definiowanana poza jakimkolwiek blokiem kodu
let zmiennaGlobalna = 10;

//zmienna lokalna zdefiniowana jest w bloku kodu : ( petla:{}, instrukcja warunkowa etc.

function zalogujDoKonsoli() {
    let zmiennaLokalna = 5;
    console.log(zmiennaLokalna);
    
    if(1 > 0) {
        let zmienna3 = 100;
        zmiennaLokalna = 10;
        zmiennaGlobalna = 15;
    }
    
    console.log(zmiennaLokalna); 
//    wyswietla sie blad bo zmienna3 jest lokalna a chcemy ja dac na globala//
//    console.log(zmienna3);
    
}
zalogujDoKonsoli();
console.log(zmiennaGlobalna);
//console.log(zmiennaLokalna);

let x = null;
console.log(x);


