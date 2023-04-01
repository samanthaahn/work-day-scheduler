// These are all the variable that I created. One for the time so that the day, month, and year all show up at the top of the page. The next is for the save button to the right of the time rows. Lastly, the currentHour variable is for the coloring element for the day schedule. 

var timeDisplayEl = $('#currentDay');
var saveButtons = $('.btn');
var currentHour = dayjs().format('H');

// This is the whole function that allows the day scheduler to work. 

$(function () {

  // add event listener on the save button so that when you writein the sheet and click save, the information will save to local storage and won't go away when you refresh the page. 

  saveButtons.on('click', function(event) {
  var todo =  $(this).siblings('textarea').val()
  var hour = $(this).siblings('.hour').text()

  console.log($(this).siblings('textarea').val())
  console.log($(this).siblings('.hour').text())

// keeps the information in local storage so the browswer can keep track . 
  localStorage.setItem(hour, todo)

});

// this is what pulls from local storage for the specific time slot. 
$('#hour-9 > textarea').val(localStorage.getItem('9AM'));
$('#hour-10 > textarea').val(localStorage.getItem('10AM'));
$('#hour-11 > textarea').val(localStorage.getItem('11AM'));
$('#hour-12 > textarea').val(localStorage.getItem('12PM'));
$('#hour-1 > textarea').val(localStorage.getItem('1PM'));
$('#hour-2 > textarea').val(localStorage.getItem('2PM'));
$('#hour-3 > textarea').val(localStorage.getItem('3PM'));
$('#hour-4 > textarea').val(localStorage.getItem('4PM'));
$('#hour-5 > textarea').val(localStorage.getItem('5PM'));

// this creates the color for the day scheuler. Grey for past, red for present, green for future. 
$('.time-block').each(function() { 
  
  var hour = parseInt($(this).attr('id').split('-')[1]);
  console.log(hour);
  console.log(currentHour);
  if (hour < currentHour) {
    $(this).addClass('past');
  } else if (hour > currentHour) {
    $(this).addClass('future');
  } else {
    $(this).addClass('present');
  }
  
  })


displayTime();

})

//This is the function that shows the day, month, and year! 
function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM YYYY');
  timeDisplayEl.text(rightNow);
}
