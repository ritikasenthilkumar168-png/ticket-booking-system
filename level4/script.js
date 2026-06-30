// Task 1: Toggle booking status
function toggleBooked(button) {
    if (button.textContent==="Book Ticket") {
        button.textContent="Booked✔️";
        button.style.backgroundColor="#22c55e";
    } else {
        button.textContent="Book Ticket";
        button.style.backgroundColor="#38bdf8";
    }
}

// Task 2: Show/hide event details
function toggleDetails(id) {
  const details = document.getElementById(id);
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}