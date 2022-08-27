// Current day displayed on top//
var currentDayEl = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentDayEl);

//Created time-blocks standard business hours - html//

//Color code timeblocks for past, present or future//

var timeHour = $('.hour');

var currentHour = moment().format("HH");


function colorCode() {
    $('.hour').each(function () {
        var toNumber = parseInt($(this).data('time'));
        var textarea = $(this).siblings("td.textarea");
        if (toNumber == currentHour) {
            textarea.css('background-color', "red")
        } else if (toNumber < currentHour) {
            textarea.css('background-color', "grey")
        } else {
            textarea.css('background-color', "green")
        }
        console.log(toNumber);
    })

};

colorCode();


//User input and hour variables//

function init() {
    var storedEvent = localStorage.getItem("09");
    $("th[data-time='09']").siblings("td.textarea").children().val(localStorage.getItem("09"));
    $("th[data-time='10']").siblings("td.textarea").children().val(localStorage.getItem("10"));
    $("th[data-time='11']").siblings("td.textarea").children().val(localStorage.getItem("11"));
    $("th[data-time='12']").siblings("td.textarea").children().val(localStorage.getItem("12"));
    $("th[data-time='13']").siblings("td.textarea").children().val(localStorage.getItem("13"));
    $("th[data-time='14']").siblings("td.textarea").children().val(localStorage.getItem("14"));
    $("th[data-time='15']").siblings("td.textarea").children().val(localStorage.getItem("15"));
    $("th[data-time='16']").siblings("td.textarea").children().val(localStorage.getItem("16"));
    $("th[data-time='17']").siblings("td.textarea").children().val(localStorage.getItem("17"));

};


// Event Listener to Floppy Disk - calling the function to save//
// Click save button - Saved in local storage//

var floppySave = $(".saveBtn");

floppySave.on("click", function (event) {
    event.preventDefault();
    var hour = $(this).siblings("th.hour").data("time");
    var input = $(this).siblings("td.textarea").children().val();
    localStorage.setItem(hour, input);
});

// Refresh the page - events persist//

init();