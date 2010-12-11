$(function() {
	var today = new Date();
	var d = today.getDate();
	var m = today.getMonth();
	var y = today.getFullYear();

  $("#calendar").fullCalendar({
  	dayClick: function() {
  		// day click callback
  	}, 
  	editable: true, 
  	eventSources: [
  		'/rvcal/events/',
  	],
  });
});
