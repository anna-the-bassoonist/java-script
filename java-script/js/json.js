//JSON
//przekladanie tekstu na obiekty, robienie obiektow z tekstu
//Obiekt:
let jsonObj = {
//    nazwa klucza:"employees"
    "employees" : [
//       tablica:po nawiasie kwadratowym
        {
            "firstName":"John",
            "lastName":"Doe"
        },
        {
        "firstName":"Anna",
            "lastName":"Smith"
        },
        {
            "firstName":"Peter",
            "lastName":"Jones"
        }
    ]
}

console.log(jsonObj.employees[1].lastName);
//w konsoli wyswitlil sie Smith

//console.log(jsonObj.employees);
//wyswietla obiekty-tablice, jakie sa ale nie zawartosc
console.log(jsonObj.employees);


//wyswietla zawartosc tablicy: wszystkie imiona i nazwiska:
for(let i = 0;  i < jsonObj.employees.length; i++) {
    console.log(jsonObj.employees[i].firstName + ' ' + jsonObj.employees[i].lastName);
}

//wyswietla zawartosc tablicy: wszystkie imiona i nazwiska (w inny sposob):
jsonObj.employees.forEach(function(element, index) {
    console.log(element.firstName + ' ' + element.lastName);
})




