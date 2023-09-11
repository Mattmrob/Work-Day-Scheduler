// VARIABLES

const saveBtn = $('.saveBtn');

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
    console.log($(this).data("value"))
    console.log(hourInt);
  })

}

// Initialization function / load previously stored values

function loadStorage() {
  let hour9Content = JSON.parse(localStorage.getItem("hour-9"));
  $('#hour-9').children('textarea').val(hour9Content);
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

    console.log(textValue);
    console.log(targetId);

    localStorage.setItem(targetId, JSON.stringify(textValue));
  })

});