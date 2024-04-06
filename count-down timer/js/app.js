const endDate = "10 April 2024 12:00 PM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const now = new Date();

    //first got into milli seconds
    // const diff = (end - now);
  
    //milisecond to second
    const diff = (end - now) / 1000;
  
    if (diff < 0) return;

    //convert into Days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    //convert into Hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    
    //convert into Minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    
    //convert into Second
    inputs[3].value = Math.floor(diff)%60;
}

clock();

setInterval(() => {clock()}, 1000)


/*

1 day = 24 hour
1 hour = 60 min
1 min = 60 second

*/