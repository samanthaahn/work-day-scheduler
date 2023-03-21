var timeDisplayEl = $('#currentDay');
var saveButtons = $('.btn');
var currentHour = dayjs().format('H');


$(function () {

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


$('.time-block').each(function() { 
  
  var hour = parseInt($(this).attr('id').split('-')[1]);
  
  if (hour < currentHour) {
    $(this).addClass('past');
  } else if (hour > currentHour) {
    $(this).addClass('future');
  } else {
    $(this).addClass('present');
  }
  
  })


displayTime();

});

function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM YYYY');
  timeDisplayEl.text(rightNow);
}
