//definicja obiektyu 

let person = {
//    pola:
    name: "Marcin",
    height: 170,
//    metoda-funkcja obiektu:
    print() {
        console.log(this.name + ' ' + this.height);
    }
}

//console.log(person.name);
//console.log(person);

//inna mozliwosc:
//let person = {
//    "first name": "Marcin",
//    height: 170,
//    print() {
//        console.log(this.name + '' + this.height);
//    }
//}

//console.log(person["first name"]);
//console.log(person.height);

person.print();


//klasy
class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    
    printInfo() {
        console.log(this.name + ' ' + this.height);
    }
}

let kuba = new Person("Kuba", 160);

//console.log(marcin.name);
kuba.printInfo();

let ania = new Person("Ania", 196);
ania.printInfo();


function poleKola(r) {
    return Math.PI * Math.pow(r,2);
}
console.log(poleKola(4));
//w tym wypadku r=4