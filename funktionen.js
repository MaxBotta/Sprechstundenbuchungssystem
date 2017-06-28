/**
 * Created by maxbotta on 28.06.17.
 */


//Diese Methode befüllt die Stunden anhand eines übergebenen Arrays
function fillHours(array) {
    var hours = document.getElementsByClassName("hour");
    for (var i = 0; i < hours.length; i++) {
        var hourId = hours[i].getAttribute("id");

        //Erst alle weiß färben
        hours[i].style.backgroundColor = "rgb(255,255,255)";

        //Jetzt werden die belegten Stunden grau gefärbt
        if (array[hourId] === true) {
            hours[i].style.backgroundColor = "rgb(232, 236, 239)";
        }

    }
}

function clickDay() {
    var weekday = document.getElementsByClassName("weekday");
    var montag = document.getElementById("montag");
    var dienstag = document.getElementById("dienstag");
    var mittwoch = document.getElementById("mittwoch");
    var donnerstag = document.getElementById("donnerstag");
    var freitag = document.getElementById("freitag");

    for (var i = 0; i < weekday.length; i++) {
        weekday[i].addEventListener("click", function () {

            if (getComputedStyle(this).backgroundColor === "rgb(255, 255, 255)") {
                montag.style.backgroundColor = "white";
                montag.style.borderLeft = "5px solid white";
                dienstag.style.backgroundColor = "white";
                dienstag.style.borderLeft = "5px solid white";
                mittwoch.style.backgroundColor = "white";
                mittwoch.style.borderLeft = "5px solid white";
                donnerstag.style.backgroundColor = "white";
                donnerstag.style.borderLeft = "5px solid white";
                freitag.style.backgroundColor = "white";
                freitag.style.borderLeft = "5px solid white";

                this.style.backgroundColor = "#e8ecef";
                this.style.borderLeft = "5px solid rgb(226, 34, 70)";
                //this.style.borderRadius = "10px";
            }
        });
    }
}

//Auswahl von Stunden
function clickHour() {
    var hour = document.getElementsByClassName("hour");
    for (var i = 0; i < hour.length; i++) {
        hour[i].addEventListener("click", function () {

            //Falls weiß dann ändere in grün
            if (getComputedStyle(this).backgroundColor === "rgb(255, 255, 255)") {
                this.style.backgroundColor = "rgb(151, 192, 134)";

                //Falls grün dann ändere in weiß
            } else if (getComputedStyle(this).backgroundColor === "rgb(151, 192, 134)"){
                this.style.backgroundColor = "rgb(255, 255, 255)";
            }
        });
    }
}

function checkDevice() {
    if (window.matchMedia('(min-width: 0px) and (max-width: 500px)').matches) {

        var hourRow = document.getElementsByClassName("hourRow");
        var hourContainer = document.getElementsByClassName("hourContainer");
        var hour = document.getElementsByClassName("hour");

        var logoContainer = document.getElementById("logoContainer");
        var dropButton = document.getElementById("dropButton");


        var montag = document.getElementById("montag");
        var dienstag = document.getElementById("dienstag");
        var mittwoch = document.getElementById("mittwoch");
        var donnerstag = document.getElementById("donnerstag");
        var freitag = document.getElementById("freitag");

        montag.style.width = "100%";
        montag.style.textAlign = "center";

        logoContainer.parentNode.removeChild(logoContainer);
        dropButton.style.width = "100%";

        dienstag.parentNode.removeChild(dienstag);
        mittwoch.parentNode.removeChild(mittwoch);
        donnerstag.parentNode.removeChild(donnerstag);
        freitag.parentNode.removeChild(freitag);


    }
}

//Diese Methode füllt die Wochentage mit Stunden
function addHours(id) {
    var container = document.getElementById(id);

    var hourContainer = document.createElement("div");
    hourContainer.setAttribute("class", "row hourContainer");
    container.appendChild(hourContainer);

    var overflowHelpContainer = document.createElement("div");
    overflowHelpContainer.setAttribute("class", "overflowHelpContainer");
    hourContainer.appendChild(overflowHelpContainer);

    for (var i = 8; i < 18; i++) {
        var hourRow = document.createElement("div");
        hourRow.setAttribute("class", "row hourRow");
        overflowHelpContainer.appendChild(hourRow);

        //Anmerkung: Aus irgendeinem Grund lies sich das hinzufügen der Stunden
        //nicht als Schleife ausführen, weshalb ich eine Funktion geschrieben habe.
        //Sollte man evt. nochmals überprüfen.
        function addMinutes(text) {
            var hour = document.createElement("div");
            hour.setAttribute("class", "hour");
            hourRow.appendChild(hour);

            var h1 = document.createElement("H4");
            var t = document.createTextNode(text);
            h1.appendChild(t);
            hour.appendChild(h1);
        }

        addMinutes(i.toString());
        addMinutes("15");
        addMinutes("30");
        addMinutes("45");
    }

}