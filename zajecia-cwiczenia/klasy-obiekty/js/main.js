'use strict';

//konstruktor jest metoda
//Napisz klase opisujaca samochody. Pola klasy:
//- VIN
//- Marka
//- Model
//- Rodzaj paliwa 
//- Pojemnosc silnika 
//- Właściciel - Imię + Nazwisko
//- Rok produkcji 
//- Uszkodzony
//- Wymienic mu silnik - rodzaj paliwa, pojemnosc
//- Sprzedać auto - Imię i Nazwisko właściciela


class Auto {
    constructor(vin, marka, model, rodzajPaliwa, pojemnoscSilnika, rokProdukcji, wlasciciel = 'producent', uszkodzony = false) {
        this.vin = vin;
        this.marka = marka;
        this.model = model;
        this.rodzajPaliwa = rodzajPaliwa;
        this.pojemnoscSilnika = pojemnoscSilnika;
        this.rokProdukcji = rokProdukcji;
        this.wlasciciel = wlasciciel;
        this.uszkodzony = uszkodzony;
    }

    zepsuj() {
        this.uszkodzony = true;
    }
    napraw() {
        this.uszkodzony = false;
    }
    wymienSilnik(NowyRodzajPaliwa, NowaPojemnoscSilnika) {
        this.rodzajPaliwa = NowyRodzajPaliwa;
        this.pojemnoscSilnika = NowaPojemnoscSilnika;
    }
    sprzedaj(nowyWlasciciel) {
        this.wlasciciel = nowyWlasciciel;
    }

}

let autoJulki = new Auto("123345567890", "Audi", "R8", "benzyna", 5200, 2017);

//tworzymy zmienna:
//let kopiaAutoJulki;
//przypisujemy ja:
//kopiaAutoJulki = autoJulki;
//wyswietlamy w konsoli:
//console.log(kopiaAutoJulki);
//w konsoli wyswietla stan ostatni

autoJulki.sprzedaj("Julka Golańska");

autoJulki.zepsuj();
autoJulki.napraw();
autoJulki.wymienSilnik("diesel", 2000);

autoJulki.sprzedaj("Sabinka Decowska");


let autoKubyKe = new Auto("123345547470", "Nissan", "GTR", "benzyna", 3800, 2018);

autoKubyKe.sprzedaj("Kuba Kempisty");

//tworzymy garaz, tablice:
let garaz = [];

//przypisujemy samochody indeksami(zmienne)do tablicy:
garaz[0] = autoJulki;
garaz[1] = autoKubyKe;

//wyswietlamy w konsoli:
console.log(garaz);


