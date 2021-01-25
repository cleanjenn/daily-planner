// create a grid for the schedule of current day
// container block for each hour of the day
//color code blocks by past, present, future.
//event listener for time block, save
//render saved to local storage

// add functions for hours and button
let saveBtn = $('.saveBtn');
currentHour = moment().format('HH');
currentHourInt = parseInt(currentHour);

//add attributes for hours to be rendered by moment format

$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

$(document).ready(function() {
    renderPlans();

    $("#currentDay").append();

    function addDate() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));

    } setInterval(addDate, 1000);

    for (let i = 0; i <= 12; i++) {

        let inputHour = $("#" + i + "Row").attr("data-time");
        let inputHourInt = parseInt(inputHour);

        if (currentHourInt === inputHourInt) {
            $("#" + i + "Row").addClass("present");
        }
        if (currentHourInt > inputHourInt) {
            $("#" + i + "Row").addClass("past");
        }
        if (currentHourInt < inputHourInt) {
            $("#" + i + "Row").addClass("future");
        }
    }

    saveBtn.on("click", function () {
        rowHour = $(this).attr("data-hour");
        input = $("#" + rowHour + "Row").val();
        localStorage.setItem(rowHour, input);
    });

    function renderPlans() {
        for (let i = 0; i <= 12; i++) {
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }
});
