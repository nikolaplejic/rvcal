/*
* Main rvcal js code.
* Use http://www.jslint.com/ before commit!!
*/

$(function() {
  var today = new Date();
  var d = today.getDate();
  var m = today.getMonth();
  var y = today.getFullYear();

  window.rvcal = { current: null };

  /* callback when user selectts day in calendar */
  var _dayClickCallback = function(d, ad, jse, v) {
    $("tbody > tr > .fc-state-default").css("background", "white");
    $(this).css("background", "#555");
    $("#id_date").val(d);
    if ($("#entryform").css("display") == "none") {
      window.rvcal.current = this;
      $("#entryform").slideDown();
    } else {
      if (window.rvcal.current == this) {
        $("#entryform").slideUp();
        window.rvcal.current = this;
      } else {
        window.rvcal.current = this;
      }
    }
  };
  
  /* sets hovering on days in calendar */
  var _setHoverOnDay = function() {
    $("tbody > tr > .fc-state-default").hover(function() {
      if (this != window.rvcal.current) {
        $(this).css({ 
              "background": "#999", 
              "cursor": "pointer"
            });
      }
     }, function() {
      if (this != window.rvcal.current) {
        $(this).css({ 
              "background": "white", 
              "cursor": "pointer"
            });
      }
     });
  };

  /* calendar setup */
  $("#calendar").fullCalendar({
   dayClick: function(d, ad, jse, v) {
      _dayClickCallback.apply(this, [d, ad, jse, v]);
   }, 
   viewDisplay: function() {
      _setHoverOnDay.apply(this);
   },
   editable: true, 
   eventSources: [
    '/rvcal/events/'
   ],
   height: 300
  });
});
