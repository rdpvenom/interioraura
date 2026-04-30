document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      message.textContent = "Thank you! Your message has been sent successfully.";
      form.reset();
    });
  }
});