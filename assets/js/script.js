// Current day displayed on top//
var currentDayEl = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentDayEl);


//Color code timeblocks for past, present or future hours//

var timeHour = $('.hour');

var currentHour = moment().format("HH");

//Function Color Code //

function colorCode() {
    $('.hour').each(function () {
        var toNumber = parseInt($(this).data('time'));
        var textarea = $(this).siblings("textarea");
        //Color Red if the row corresponds to the current hour
        if (toNumber == currentHour) {
            textarea.addClass('present');
        //Color Grey if the row corresponds to past hours
        } else if (toNumber < currentHour) {
            textarea.addClass('past');
        //Color Green if the row corresponds to future hours
        } else {
            textarea.addClass('future')
        }
        console.log(toNumber);
    })

};

colorCode();


// Event Listener to Floppy Disk//

// Click Save Button - Saved in local storage//

var floppySave = $(".saveBtn");

floppySave.on("click", function (event) {
    event.preventDefault();
    var hour = $(this).siblings("div.hour").data("time");
    var input = $(this).siblings("textarea").val();
    localStorage.setItem(hour, input);
});

// Function Init - Refresh the page - events persists - get's the info from the local storage//

function init() {
    $("div[data-time='09']").siblings("textarea").val(localStorage.getItem("09"));
    $("div[data-time='10']").siblings("textarea").val(localStorage.getItem("10"));
    $("div[data-time='11']").siblings("textarea").val(localStorage.getItem("11"));
    $("div[data-time='12']").siblings("textarea").val(localStorage.getItem("12"));
    $("div[data-time='13']").siblings("textarea").val(localStorage.getItem("13"));
    $("div[data-time='14']").siblings("textarea").val(localStorage.getItem("14"));
    $("div[data-time='15']").siblings("textarea").val(localStorage.getItem("15"));
    $("div[data-time='16']").siblings("textarea").val(localStorage.getItem("16"));
    $("div[data-time='17']").siblings("textarea").val(localStorage.getItem("17"));
};

init();