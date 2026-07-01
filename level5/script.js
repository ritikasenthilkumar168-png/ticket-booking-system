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

// Task 4: Form validation
function submitBooking() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = document.getElementById("event").value;
  const tickets = document.getElementById("tickets").value;
  const message = document.getElementById("form-message");

  // Check if all fields are filled
  if (name === "" || email === "" || event === "" || tickets === "") {
    message.textContent = "⚠️ Please fill in all fields before confirming.";
    message.style.color = "red";
    return;
  }

  // Check if email is valid
  if (!email.includes("@")) {
    message.textContent = "⚠️ Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  // Check if ticket count is valid
  if (tickets < 1 || tickets > 10) {
    message.textContent = "⚠️ Please enter a ticket count between 1 and 10.";
    message.style.color = "red";
    return;
  }

  // All good — show success message
  message.textContent = `✅ Booking confirmed for ${name}! Check ${email} for details.`;
  message.style.color = "green";
}