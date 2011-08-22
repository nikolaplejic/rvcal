/*
* Main rvcal js code.
* Use http://www.jslint.com/ before commit!!
*/

$(function() {
  window.rvcal = { current: null };

  function _resetColors() {
  	$(".fc-view > table > tbody > tr:nth-child(even) > td").not($(window.rvcal.current)).css("background", "#E5ECF9");
  	$(".fc-view > table > tbody > tr:nth-child(odd) > td").not($(window.rvcal.current)).css("background", "#fff");
  }

  /* callback when user selects day in calendar */
  var _dayClickCallback = function(d, ad, jse, v) {
    $(this).css("background", "#D1DCF9");
    $("#id_date").val(
      $.fullCalendar.formatDate(d, 'yyyy-MM-dd')
    );
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
    _resetColors();
  };
  
  /* sets hovering on days in calendar */
  var _setHoverOnDay = function() {
    $("tbody > tr > .fc-state-default").hover(function() {
      if (this != window.rvcal.current) {
        $(this).css({ 
              "background": "#D1DCF9", 
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
      _resetColors();
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
   height: 300, 
   firstDay: 1
  });
});
