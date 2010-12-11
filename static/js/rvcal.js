$(function() {
	var today = new Date();
	var d = today.getDate();
	var m = today.getMonth();
	var y = today.getFullYear();

	window.rvcal = { current: null };

  $("#calendar").fullCalendar({
  	dayClick: function(d, ad, jse, v) {
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
  	}, 
  	viewDisplay: function() {
  		$("tbody > tr > .fc-state-default").hover(function() {
		    $(this).css("background", "#999");
	    }, function() {
	    	if (this != window.rvcal.current) {
		      $(this).css("background", "white");
		    }
	    });
  	},
  	editable: true, 
  	eventSources: [
  		'/rvcal/events/',
  	],
  });
});
