function openBooking() {
  document.getElementById("bookingModal").style.display = "block";
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}

function sendWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;

  const message = 
`Hello Y.S. Makeup Studio ✨
I would like to book an appointment.

👤 Name: ${name}
📞 Phone: ${phone}
📅 Date: ${date}
💄 Service: ${service}

Please confirm my booking. ❤️`;

  const whatsappURL = 
`https://wa.me/916393780256?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}
