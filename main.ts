let interval : number
function StartCountdown(targetDate:Date){
    const countdownElement = document.getElementById("countdown") as HTMLElement
    
    function updateCountdown(){
        const now = new Date().getTime() 
        const distance = targetDate.getTime() - now
        if (distance <= 0){                              
            countdownElement.innerText = "🎉Time's Up !✨";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 *24))
        const hours = Math.floor((distance %(1000 * 60 * 60 *24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance %(1000 * 60 *60 ))/ (1000 * 60))
        const seconds = Math.floor((distance %(1000 * 60)) / (1000))

        countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
        updateCountdown()
        interval = setInterval(updateCountdown,1000)
}

document.getElementById("startbutton")?.addEventListener("click",() => {
    const dateInput = document.getElementById("dateInput") as HTMLInputElement
    if (dateInput.value){
        const targetDate = new Date(dateInput.value);
        StartCountdown(targetDate);
    } else {
       alert("Please select Date and Time");
    }
})