//$(document).ready(function(){

var todayDate;
//var todayHours = ["9:00am", "10:00am","11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm"];
var currentHour;

//get current date, format and assign to variable
todayDate = moment().format("dddd, MMMM Do YYYY"); 

//add date variable text to placeholder
$("#plannerDate span").text(todayDate);

//-------------------Code to save new event to planner------------------------------------

$("#btn9").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt9").val().trim();
    $("#log9").prepend("<span>"+usrInput+"</span><br>");
})

$("#btn10").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt10").val().trim();
    $("#log10").prepend("<span>"+usrInput+"</span><br>");
})

$("#btn11").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt11").val().trim();
    $("#log11").prepend("<span>"+usrInput+"</span><br>");
})

$("#btn12").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt12").val().trim();
    $("#log12").prepend("<span>"+usrInput+"</span><br>");
})

$("#btn1").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt1").val().trim();
    $("#log1").prepend("<span>"+usrInput+"</span><br>");
})

$("#btn2").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt2").val().trim();
    $("#log2").prepend("<span>"+usrInput+"</span><br>");
})

$("#btn3").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt3").val().trim();
    $("#log3").prepend("<span>"+usrInput+"</span><br>");
})

$("#btn4").on("click", function(event) {
    event.preventDefault();
    var usrInput = $("#txt4").val().trim();
    $("#log4").prepend("<span>"+usrInput+"</span><br>");
})

//});