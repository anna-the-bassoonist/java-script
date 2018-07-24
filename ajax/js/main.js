//json bedzie lzejszy od xml mimo ze oba sa formami tekstowymi

//ajax - nie musi przeladowywac
//np do slepow internetowych-koszyki , fb
//amp - przyspieszona strona-komorki-warto sie zainteresowac. lepsze SEO

//definicja funkcji ajax:
//nie ma ajaxu bez elementu XMLHttpReuest
function ajax(method, url) {
    let httpReq = new XMLHttpRequest();

    //    otwieram polaczenie z serwerem/(method,url)-najpierw jak potem skad
    httpReq.open(method, url);

    //    jesli status polaczeniazostal zmieniony->
    //    httpReq.readyState
    //    0: polaczenie nie nawiazane
    //    1: polaczenie nawiazane
    //    2:zadanie odebrane
    //    3: przetwarzanie,
    //    4:dane zwrocone i gotowe oodo uzycia




    httpReq.onreadystatechange = function () {
        //        onreadystatechange sprawdza kod readyState
        if (httpReq.readyState == 4) {
            //            musze sprawdzic czy dane moga zostac zwrocone, musze sprawdzic stan 200.
            //            sprawdzam status polaczenia
            if (httpReq.status == 200) {
                //                dane moge dostac w formie xml albo json, jesli status jest ok

                //                pojemnik na zwrocone dane,zeby nie  lataly w powietrzy
                let returnData = httpReq.responseText;

                //                chcemy zadzialac na tych danych, na instancji obiektu : httpReq.onsuccess
                httpReq.onsuccess(returnData);
                //                musimy wyzerowac obiekt zeby nie trzymal polaczenia z serwerem, przypisujemy zatem:
                httpReq = null;
                //               !!!! dotąd bedzie zawsze tak samo !!!!!

            }
        }

    }

    //    definicja onsucceess na obiekcie httpReq, musimy dodac parametr:
    httpReq.onsuccess = function (response) {
//        potrzebujemy jeszcze jedna zmienna zeby teksy przerzucic na json na obiekt, bo response to string
        let jsonObj = JSON.parse(response);
        console.log(jsonObj.userId);
//        parse-zmienia ze stringa do obiektu
        
        
//        warsztat:button click:
//        3pola w obiekcie,kazdy rozbic na nowy Element- tworzenie elementow: utworzenie
        let paragraf1 = document.createElement('p');
        let paragraf2 = document.createElement('p');
        let paragraf3 = document.createElement('p');
        
//        przypisujemy paragrafy do elementow obiektu:uzupelnienie danych
        paragraf1.innerHTML = jsonObj.userId;
        paragraf2.innerHTML = jsonObj.userName;
        paragraf3.innerHTML = jsonObj.userUrl;
        
//        dodajemy Element:dodanie do obiektu
        document.body.appendChild(paragraf1);
        document.body.appendChild(paragraf2);
        document.body.appendChild(paragraf3);
    }
    //    wysylamy zadanie do serrwera: to bylo jeszcze przed warsztatem do kodu
    httpReq.send();
}

//wywolanie funkcji:
//http://echo.jsontest.com darmowe 
//ajax('GET','http://echo.jsontest.com/userId/108/userName/Akademia108/userUrl/akademia108.pl');

    document.getElementById('btn').addEventListener('click', pobierzDane);

function pobierzDane(){
    ajax ('GET','http://echo.jsontest.com/userId/108/userName/Akademia108/userUrl/akademia108.pl');
}
















