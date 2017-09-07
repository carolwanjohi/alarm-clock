var displayTime = function() {
    var time = moment().format('dddd , DD-MM-YYYY , HH:mm:ss');
    $('#currentTime').text(time);
    setInterval(displayTime, 1000);
};

$(document).ready(function () {
    // Display current time
    displayTime();

    $('#setButton').click(function (event) {
        event.preventDefault();
        console.log("I am grroot");
        var alarmHour = parseInt($('#setHour').val());
        var alarmMinute = parseInt($('#setMinute').val());
        $('#setHour').val("");
        $('#setMinute').val("");
        // Test
        console.log(alarmHour);
        console.log(alarmMinute);
    });
});