var fragor = [
{
        fraga:"varför e jag blao",
        rattsvar: 1,
        alternativ: ["kanske","föratt","ja","nej"]
},
{
    fraga: "vilken färg hade gustav vasas bil?",
    rattsvar: 2,
    alternativ: ["blå","röd","vit","gul"]
}
];

console.log(fragor[1].fraga);
var fragetext = document.getElementById("fraga");
fragetext.innerhtml = fragor [0].fraga;

var knapp = [0];
for(t = 0; t < alternativ.length; t++) {
    
    var vilken = "alt"+t;
    console.log(vilken);
knapp[t] = document. getElementById(vilken);
knapp[t] = innerhtml














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



