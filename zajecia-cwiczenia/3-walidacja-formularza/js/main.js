'use strict';

function waliduj(e) {
    e.preventDefault();


    let imie = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pierwszaZgoda = document.getElementById("zgoda-marketingowa-1");

    if (imie == '') {
        document.getElementById("wiadomosc").innerHTML += "<li>wpisz imię</li>";
        //         console.log("dziala");
//        return;
    }
    if (email == '') {
        document.getElementById("wiadomosc").innerHTML += "<li>wpisz email</li>";
//        console.log('dziala');
    }
    if (pierwszaZgoda.checked == false) {
        document.getElementById("wiadomosc").innerHTML += "<li>zaznacz wyrażam zgodę pierwszą</li>";
//        console.log('dobrze');
    }

}


let formularz = document.getElementById("formularz");
//console.log(formularz);
formularz.addEventListener('submit', waliduj);


let wszystkieZgody = document.getElementById("wszystkie-zgody");
wszystkieZgody.addEventListener('change', wszystkieZgodyChange);
//console.log('dziala');

function wszystkieZgodyChange() {

    let pierwszaZgoda = document.getElementById("zgoda-marketingowa-1");

    let drugaZgoda = document.getElementById("zgoda-marketingowa-2");
    //            console.log(drugaZgoda);
    if (wszystkieZgody.checked) {
        //        console.log('zaznaczeniu');
        pierwszaZgoda.checked = true;
        drugaZgoda.checked = true;
        //        //        blokuje przycisk:
        pierwszaZgoda.setAttribute("disabled", "");
        drugaZgoda.setAttribute("disabled", "");
        //        console.log('dziala');
    } else {
        pierwszaZgoda.checked = false;
        drugaZgoda.checked = false;
        //        odblokowuje przycisk:
        pierwszaZgoda.removeAttribute("disabled", "");
        drugaZgoda.removeAttribute("disabled", "");
        //        console.log('niezaznaczone');
    }
}



//1 pobrac checkbox wszystkie zgoda
//2 napisac funkcje ktora wykona sie po zaznaczeniu checkboxa- console.log
//
//3 podpiac addEventListener pod checkbox wszzystkie zgody (1)
