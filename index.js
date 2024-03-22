
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const patientName = document.getElementById("patientName").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = `<p>Appointment booked for ${patientName} with ${doctor} on ${date}.</p>`;
   
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');


    mobileMenu.addEventListener('click', function () {
        menu.classList.toggle('show-menu');
    });
});