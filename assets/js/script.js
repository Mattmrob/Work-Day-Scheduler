// VARIABLES

const saveBtn = $('.saveBtn');
const submission = $('#submissionReceived');

const dateArea = $('#currentDay');
const today = dayjs();

let hour = today.format("H");
let hourInt = parseInt(hour);

let hourChange = hourInt;

// FUNCTION DECLARATION

// Time Tracking Function!
// Checks each time-block div's data value. The value is equal to the assigned hour in 24 hour time
// If the value is less, equal to, or more than dayjs current time, classes change

function linearTime() {

  $('div.time-block').each(function(){
    if ($(this).data("value") < hourInt) {
      $(this).addClass("past");
    } else if ($(this).data("value") === hourInt) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  })
}

// Initialization function / load previously stored values

function loadStorage() {
  let hour9Content = JSON.parse(localStorage.getItem("hour-9"));
  let hour10Content = JSON.parse(localStorage.getItem("hour-10"));
  let hour11Content = JSON.parse(localStorage.getItem("hour-11"));
  let hour12Content = JSON.parse(localStorage.getItem("hour-12"));
  let hour13Content = JSON.parse(localStorage.getItem("hour-13"));
  let hour14Content = JSON.parse(localStorage.getItem("hour-14"));
  let hour15Content = JSON.parse(localStorage.getItem("hour-15"));
  let hour16Content = JSON.parse(localStorage.getItem("hour-16"));
  let hour17Content = JSON.parse(localStorage.getItem("hour-17"));

  $('#hour-9').children('textarea').val(hour9Content);
  $('#hour-10').children('textarea').val(hour10Content);
  $('#hour-11').children('textarea').val(hour11Content);
  $('#hour-12').children('textarea').val(hour12Content);
  $('#hour-13').children('textarea').val(hour13Content);
  $('#hour-14').children('textarea').val(hour14Content);
  $('#hour-15').children('textarea').val(hour15Content);
  $('#hour-16').children('textarea').val(hour16Content);
  $('#hour-17').children('textarea').val(hour17Content);
}

// Function Execution and DOM traversal

$(function () {

  dateArea.text(today.format('dddd, MMMM DD'));

  linearTime();
  loadStorage();

// Save your input to local storage!
  saveBtn.on('click', function(event) {
    event.preventDefault();
    let textValue = $(this).siblings("textarea").val();
    let targetId = $(this).parents("div").attr("id");
    localStorage.setItem(targetId, JSON.stringify(textValue));

    $(submission).text("Event added to Local Storage!~")
  })

});