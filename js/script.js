(function () {
  emailjs.init("jvrsyBoOPr1X32Kb4");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const message = document.getElementById("comment").value;

    emailjs
      .send("service_58z0zml", "template_lq29qrc", {
        name,
        email,
        phone,
        location,
        message,
      })
      .then(
        function (response) {
          document.getElementById("contactMsg").textContent =
            "Message sent successfully!";
          name.value = "";
          email.value = "";
          phone.value = "";
          location.value = "";
          message.value = "";
        },
        function (error) {
          document.getElementById("contactMsg").textContent =
            "Failed to send message. Please try again.";
        }
      );
  });
