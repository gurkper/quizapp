/*
var fragor = [
{
        fraga:"Hur många hoppjerkor finns det?",
        rattsvar: 1,
        alternativ: ["25","32","12","14"]
},
{
    fraga: "vilken färg hade gustav vasas bil?",
    rattsvar: 2,
    alternativ: ["blå","röd","vit","gul"]
}
];
*/
//gör en ajax request
var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple', true)
    xhr.onload = function() {
        if(this.status == 200) {
            var frageladan = JSON.parse(this.responseText);

            console.log(frageladan);
            console.log(frageladan.results[0].question);
            var alternativ = [frageladan.results[0]. correct_answer,frageladan.results[0].incorrect_answers[0],frageladan.results[0].incorrect_answers[1],frageladan.results[0].incorrect_answers[2]];
           shuffle(alternativ);
            var knapp = [];
    for(t = 0; t < alternativ.length; t++) {
    console.log(t);
    var vilken = "alt"+t;
    console.log(vilken);
knapp[t] = document. getElementById(vilken);
console.log(knapp[t]);
knapp[t].innerHTML = alternativ[t];
console.log(alternativ[t]);
}   
            var fraga = document.getElementById("fraga");
            var fraga1 = frageladan.results[0].question;
            fraga.innerHTML = fraga1;

            console.log(frageladan.results[0].correct_answer);
            var fraga = document.getElementById("fraga");
            var fraga1 = frageladan.results[0].question;
            fraga.innerHTML = fraga1;

        }

    }
    xhr.send();
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -=1;
            temporaryValue = array [currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
//förra gången
/*
console.log(fragor[1].fraga);
var fragetext = document.getElementById("fraga");
fragetext.innerhtml = fragor [0].fraga;

var knapp = [];
for (t = 0; t < fragor[0].alternativ.length; t++) {
    
    var vilken = "alt"+t;
    console.log(vilken);
knapp[t] = document. getElementById(vilken);
knapp[t]  .innerHTML = fragor[0].alternativ[t];
}
*/














//gammal kod som jag kan titta på
/*
var fraga = document.getElementById("fraga");
var coolfraga = "hur många lingon fanns det i världen?";
var alternativ = ["tre", "fyra","sex","tjugo"];

for (i = 0; i < alternativ.length; i++) {
console.log(alternativ[i]);
}


fraga.innerHTML = coolfraga;
var knapp = [];
for(t = 0; t < alternativ.length; t++) {
    console.log(t);
    var vilken = "alt"+t;
    console.log(vilken);
knapp[t] = document. getElementById(vilken);
console.log(knapp[t]);
knapp[t].innerHTML = alternativ[t];
console.log(alternativ[t]);
}
*/

/*
console.log(fraga.innerHTML);

var knapp = document.getElementById("knapp1");

knapp.addEventListener("click", function() {
console.log("Ja");
fraga.innerHTML = "Hoppsan hejsan";
});
*/



