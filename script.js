function updateClock() {
    const now = new Date();

    const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const day = daysOfWeek[now.getDay()];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >=12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("hour").innerText = `${hours}`;
    document.getElementById("ampm").innerText = `${ampm}`;
    document.getElementById("minute").innerText = `${minutes}`;
    document.getElementById("day").innerText = `${day}`;
}

setInterval(updateClock, 1000);
updateClock();