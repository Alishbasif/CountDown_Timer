var _a;
var interval;
function StartCountdown(targetDate) {
    var countdownElement = document.getElementById("countdown");
    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate.getTime() - now;
        if (distance <= 0) {
            countdownElement.innerText = "🎉Time's Up !✨";
            clearInterval(interval);
            return;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / (1000));
        countdownElement.innerText = "".concat(days, "d ").concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s");
    }
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
}
(_a = document.getElementById("startbutton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var dateInput = document.getElementById("dateInput");
    if (dateInput.value) {
        var targetDate = new Date(dateInput.value);
        StartCountdown(targetDate);
    }
    else {
        alert("Please select Date and Time");
    }
});
