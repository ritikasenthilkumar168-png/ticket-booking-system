function toggleBooked(button) {
    if (button.textContent==="Book Ticket") {
        button.textContent="Booked✔️";
        button.style.backgroundColor="#22c55e";
    } else {
        button.textContent="Book Ticket";
        button.style.backgroundColor="#38bdf8";
    }
}