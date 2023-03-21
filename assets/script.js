// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeDisplayEl = $('#currentDay');
var saveButtons = $('.btn');


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  saveButtons.on('click', function(event) {
  var todo =  $(this).siblings('textarea').val()
  var hour = $(this).siblings('.hour').text()

  console.log($(this).siblings('textarea').val())
  console.log($(this).siblings('.hour').text())

  localStorage.setItem(hour, todo)

});

$('#hour-9 > textarea').val(localStorage.getItem('9AM'));
$('#hour-10 > textarea').val(localStorage.getItem('10AM'));
$('#hour-11 > textarea').val(localStorage.getItem('11AM'));
$('#hour-12 > textarea').val(localStorage.getItem('12PM'));
$('#hour-1 > textarea').val(localStorage.getItem('1PM'));
$('#hour-2 > textarea').val(localStorage.getItem('2PM'));
$('#hour-3 > textarea').val(localStorage.getItem('3PM'));
$('#hour-4 > textarea').val(localStorage.getItem('4PM'));
$('#hour-5 > textarea').val(localStorage.getItem('5PM'));

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  

displayTime();

});

function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM YYYY');
  timeDisplayEl.text(rightNow);
}


