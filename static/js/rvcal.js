$(function() {
	var today = new Date();
	var d = today.getDate();
	var m = today.getMonth();
	var y = today.getFullYear();

  $("#calendar").fullCalendar({
  	dayClick: function() {
  		$("#entryform").slideDown();
  	}, 
  	viewDisplay: function() {
  		$("tbody > tr > .fc-state-default").hover(function() {
		    $(this).css("background", "#999");
	    }, function() {
		    $(this).css("background", "white");
	    });
  	},
  	editable: true, 
  	eventSources: [
  		'/rvcal/events/',
  	],
  });
});
