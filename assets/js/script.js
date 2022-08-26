// Current day displayed on top//
var currentDayEl = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentDayEl);

//Created time-blocks standard business hours - html//

//Color code timeblocks for past, present or future//

var timeHour = $('.hour');

var currentHour = moment().format("H");


function colorCode (){

var toNumber = parseInt($(".hour").attr("datetime"));

var textarea = $(".textarea");

if(toNumber === currentHour){
    textarea.css('background-color',"red")
} else if (toNumber < currentHour){
    textarea.css('background-color',"grey") 
}else{
    textarea.css('background-color',"green") 
}
console.log(toNumber);
} 


colorCode();


// Click into a timeblock - User input an event//
// create an input - append - user inpunt


/*
var eventRow = $('textarea').

*/

// Click save button - Saved in local storage//
//save user input to local storage

// Refresh the page - events persist//

