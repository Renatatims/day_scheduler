// Current day displayed on top//
var currentDayEl = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentDayEl);

//Created time-blocks standard business hours - html//

//Color code timeblocks for past, present or future//

var timeHour = $('.hour');

var currentHour = moment().format("HH");


function colorCode (){
$('.hour').each(function(){
    var toNumber = parseInt($(this).data('time'));
    var textarea = $(this).siblings("td.textarea");
if(toNumber == currentHour){
    textarea.css('background-color',"red")
} else if (toNumber < currentHour){
    textarea.css('background-color',"grey") 
}else{
    textarea.css('background-color',"green") 
}
console.log(toNumber);
})

};

colorCode();


//User input and hour variables//

var hour = $(this).siblings("th.hour").data("time");
var input = $(this).siblings("td.textarea").children().val();

// Save User Input - save user input to local storage

function saveEvent(){
    localStorage.setItem(hour,input);
};

// Event Listener to Floppy Disk - calling the function to save//
// Click save button - Saved in local storage//

var floppySave = $(".saveBtn");

floppySave.on("click", function(event){
    event.preventDefault();
    saveEvent();    
});

// Refresh the page - events persist//

