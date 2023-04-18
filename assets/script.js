$(function () {
  // Click event for when you click the save button and it will render to local storage 
  $(".saveBtn").on("click", function(event){
    event.preventDefault();
    var textEl = $(this).siblings(".description").val()
    var hourDoc = $(this).parent("").attr("id");
    localStorage.setItem(hourDoc, textEl)
    })

  //Created loop for time block to add past, present and future
  // Had help from TA Sean to modify code
 $(".time-block").each(function(){
  var time = parseInt($(this).attr("id").split("-")[1]);
  var hour = dayjs().hour();

  if (time < hour) {
    $(this).addClass("past");
  } else if (time === hour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
  })


  // Added local getItem to store text input in description
  $("#hour-9 textEl").val(localStorage.getItem("hour-9"));
  $("#hour-10 textEl").val(localStorage.getItem("hour-10"));
  $("#hour-11 textEl").val(localStorage.getItem("hour-11"));
  $("#hour-12 textEl").val(localStorage.getItem("hour-12"));
  $("#hour-13 textEl").val(localStorage.getItem("hour-13"));
  $("#hour-14 textEl").val(localStorage.getItem("hour-14"));
  $("#hour-15 textEl").val(localStorage.getItem("hour-15"));
  $("#hour-16 textEl").val(localStorage.getItem("hour-16"));
  $("#hour-17 textEl").val(localStorage.getItem("hour-17"));

// Show current day of the week and date in subheader
  var today = dayjs()
  $("#currentDay").text(today.format("dddd, MM/DD/YYYY"));
});
