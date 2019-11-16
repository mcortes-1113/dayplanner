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

//create object to hold arrays of entries
var activities = {
    nine: nineAct,
    ten: tenAct,
    eleven: elevenAct,
    twelve: twelveAct,
    one: oneAct,
    two: twoAct,
    three: threeAct,
    four: fourAct
  };

//-------------------Code to save new entry to hour arrays------------------------------------

$("#btn9").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt9").val().trim();
    nineAct.push(usrInput);
    localStorage.setItem("activities", JSON.stringify(activities));
    var entries = JSON.parse(localStorage.getItem("activities"));
    $("#log9").prepend("<p>" + entries.nine + "</p");
})

$("#btn10").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt10").val().trim();
    tenAct.push(usrInput);
    localStorage.setItem("activities", JSON.stringify(activities));
    var entries = JSON.parse(localStorage.getItem("activities"));
    $("#log10").prepend("<p>" + entries.ten + "</p");
})

$("#btn11").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt11").val().trim();
    elevenAct.push(usrInput);
    localStorage.setItem("activities", JSON.stringify(activities));
    var entries = JSON.parse(localStorage.getItem("activities"));
    $("#log11").prepend("<p>" + entries.eleven + "</p");
})

$("#btn12").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt12").val().trim();
    twelveAct.push(usrInput);
    localStorage.setItem("activities", JSON.stringify(activities));
    var entries = JSON.parse(localStorage.getItem("activities"));
    $("#log12").prepend("<p>" + entries.twelve + "</p");
})

$("#btn1").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt1").val().trim();
    oneAct.push(usrInput);
    localStorage.setItem("activities", JSON.stringify(activities));
    var entries = JSON.parse(localStorage.getItem("activities"));
    $("#log1").prepend("<p>" + entries.one + "</p");
})

$("#btn2").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt2").val().trim();
    twoAct.push(usrInput);
    localStorage.setItem("activities", JSON.stringify(activities));
    var entries = JSON.parse(localStorage.getItem("activities"));
    $("#log2").prepend("<p>" + entries.two + "</p");
})

$("#btn3").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt3").val().trim();
    threeAct.push(usrInput);
    localStorage.setItem("activities", JSON.stringify(activities));
    var entries = JSON.parse(localStorage.getItem("activities"));
    $("#log3").prepend("<p>" + entries.three + "</p");
})

$("#btn4").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt4").val().trim();
    fourAct.push(usrInput);
    localStorage.setItem("activities", JSON.stringify(activities));
    var entries = JSON.parse(localStorage.getItem("activities"));
    $("#log4").prepend("<p>" + entries.four + "</p");
})

//});