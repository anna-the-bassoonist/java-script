'use strict';

function napisz() {
    console.log("kliknieto");
}

let buttonKlik = document.getElementById("klik");
//to samo co nizej:
//buttonKlik.onclick = napisz

//pracuje na obiektach
buttonKlik.addEventListener('click', napisz);


//------------------
// inner HTML vs outerHTML
//pobieramy container:
let container = document.getElementById("container");
console.log(container.innerHTML);
console.log(container.outerHTML);