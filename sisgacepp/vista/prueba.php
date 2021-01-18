<!DOCTYPE html>
<html>
<head>
	<title>
		calendario
	</title>
	
	<script src='js/jquery.min.js'></script>
	<script src='js/jquery-3.5.1.js'></script>
	<script src='js/moment.min.js'></script>
	<script src="js/main.min.js"></script>
    <link rel="stylesheet" href="css/main.min.css" />


</head>
<body>

	<div id="calendar"></div>
	<script>
	  var calendarEl = document.getElementById('calendar');
	  var calendar = new FullCalendar.Calendar(calendarEl, {
	    initialView: '',
	    headerToolbar: {
                        start: 'today,prev,next', 
                        center: 'title',
                        end: 'month'},
        lang: 'es'
	  });
	  calendar.render();
	</script>
</body>
</html>