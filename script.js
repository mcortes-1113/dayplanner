//$(document).ready(function(){

//localStorage.clear()

//get current date, format and assign to variable
var todayDate = moment().format("dddd, MMMM Do YYYY"); 
var currentHour = moment().format("LT");

//add date variable text to placeholder
$("#tDate").text(todayDate);
$("#cTime").text(currentHour);

//create arrays to hold entries for each hour div
var nineAct = [];
var tenAct = [];
var elevenAct = [];
var twelveAct = [];
var oneAct = [];
var twoAct = [];
var threeAct = [];
var fourAct = [];

//-------------------Code to save new entry to hour arrays------------------------------------

$("#btn9").on("click", function(event) {
    event.preventDefault();
    nineAct = localStorage.getItem("nineAct");
    nineAct = nineAct ? JSON.parse(nineAct) : [];
    var usrInput = $("#txt9").val().trim();
    nineAct.push(usrInput);
    localStorage.setItem("nineAct", JSON.stringify(nineAct));
    for ( i=0; i < nineAct.length; i++){
    $("#log9").prepend("<p class='entry'>" + nineAct[i] + "</p>");
    }
})

$("#btn10").on("click", function(event) {
    event.preventDefault();
    tenAct = localStorage.getItem("tenAct");
    tenAct = tenAct ? JSON.parse(tenAct) : [];
    var usrInput = $("#txt10").val().trim();
    tenAct.push(usrInput);
    localStorage.setItem("tenAct", JSON.stringify(tenAct));
    for ( i=0; i < tenAct.length; i++){
    $("#log10").prepend("<p>" + tenAct[i] + "</p>");
    }
})

$("#btn11").on("click", function(event) {
    event.preventDefault();
    elevenAct = localStorage.getItem("elevenAct");
    elevenAct = elevenAct ? JSON.parse(elevenAct) : [];
    var usrInput = $("#txt11").val().trim();
    elevenAct.push(usrInput);
    localStorage.setItem("nineAct", JSON.stringify(elevenAct));
    for ( i=0; i < elevenAct.length; i++){
    $("#log11").prepend("<p>" + elevenAct[i] + "</p>");
    }
})

$("#btn12").on("click", function(event) {
    event.preventDefault();
    twelveAct = localStorage.getItem("twelveAct");
    twelveAct = twelveAct ? JSON.parse(twelveAct) : [];
    var usrInput = $("#txt12").val().trim();
    twelveAct.push(usrInput);
    localStorage.setItem("twelveAct", JSON.stringify(twelveAct));
    for ( i=0; i < twelveAct.length; i++){
    $("#log12").prepend("<p>" + twelveAct[i] + "</p>");
    }
})

$("#btn1").on("click", function(event) {
    event.preventDefault();
    oneAct = localStorage.getItem("oneAct");
    oneAct = oneAct ? JSON.parse(oneAct) : [];
    var usrInput = $("#txt1").val().trim();
    oneAct.push(usrInput);
    localStorage.setItem("oneAct", JSON.stringify(oneAct));
    for ( i=0; i < oneAct.length; i++){
    $("#log1").prepend("<p>" + oneAct[i] + "</p>");
    }
})

$("#btn2").on("click", function(event) {
    event.preventDefault();
    twoAct = localStorage.getItem("twoAct");
    twoAct = twoAct ? JSON.parse(twoAct) : [];
    var usrInput = $("#txt2").val().trim();
    twoAct.push(usrInput);
    localStorage.setItem("twoAct", JSON.stringify(twoAct));
    for ( i=0; i < twoAct.length; i++){
    $("#log2").prepend("<p>" + twoAct[i] + "</p>");
    }
})

$("#btn3").on("click", function(event) {
    event.preventDefault();
    threeAct = localStorage.getItem("threeAct");
    threeAct = threeAct ? JSON.parse(threeAct) : [];
    var usrInput = $("#txt3").val().trim();
    threeAct.push(usrInput);
    localStorage.setItem("threeAct", JSON.stringify(threeAct));
    for ( i=0; i < threeAct.length; i++){
    $("#log3").prepend("<p>" + threeAct[i] + "</p>");
    }
})

$("#btn4").on("click", function(event) {
    event.preventDefault();
    fourAct = localStorage.getItem("fourAct");
    fourAct = fourAct ? JSON.parse(fourAct) : [];
    var usrInput = $("#txt4").val().trim();
    fourAct.push(usrInput);
    localStorage.setItem("fourAct", JSON.stringify(fourAct));
    for ( i=0; i < fourAct.length; i++){
    $("#log4").prepend("<p>" + fourAct[i] + "</p>");
    }
})

//});