var displayTime = function() {
    var time = moment().format('HH:mm:ss');
};

$(document).ready(function () {
    console.log('Okay, locked and loaded');
    $('#setAlarmForm').click(function (event) {
        event.preventDefault();
        console.log("I am grroot");
    });
});