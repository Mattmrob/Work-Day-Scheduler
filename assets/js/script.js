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

// Function Execution and DOM traversal

$(function () {

  dateArea.text(today.format('dddd, MMMM DD'));

  linearTime();

  saveBtn.on('click', function(event) {
    event.preventDefault();

    let textValue = $(this).siblings("textarea").val();
    let targetId = $(this).parents("div").attr("id");

    console.log(textValue);
    console.log(targetId);

    localStorage.setItem(targetId, JSON.stringify(textValue));
  })




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to display the current date in the header of the page.

});