function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >=12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("hour").innerText = `${hours}`;
    document.getElementById("minute").innerText = `${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();