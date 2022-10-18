$(function(){
    $('#categoryButton').click(function() {
        $('#iframeHolder').html("");
        if (!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="Category.html" width="700" height="450" frameBorder=\'0\'></iframe>');

        }
    })

    $('#clientButton').click(function() {
        $('#iframeHolder').html("");
        if (!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="Client.html" width="700" height="450" frameBorder=\'0\'></iframe>');
        }
    })

    $('#libraryButton').click(function() {
        $('#iframeHolder').html("");
        if (!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="Library.html" width="700" height="450" frameBorder=\'0\'></iframe>');
        }
    })

        $('#messageButton').click(function () {
            $('#iframeHolder').html("");
            if (!$('#iframe').length) {
                $('#iframeHolder').html('<iframe id="iframe" src="Message.html" width="700" height="450" frameBorder=\'0\'></iframe>');
            }
        })

            $('#reservationButton').click(function () {
                $('#iframeHolder').html("");
                if (!$('#iframe').length) {
                    $('#iframeHolder').html('<iframe id="iframe" src="Reservation.html" width="700" height="450" frameBorder=\'0\'></iframe>');
                }
            });

    })



